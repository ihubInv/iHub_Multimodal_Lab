# Team Members Setup Guide

This guide will help you add team members to the OnePageMML website.

## Step 1: Database Setup

Make sure your database is set up with the `team_members` table. If not, run the schema file first:

```sql
-- Run the schema.sql file to create the database and tables
```

## Step 2: Copy Team Images

Team images should be placed in: `OnePageMML/public/imgcopy/team/`

The images have been copied from NewMMLab. If you need to copy more images, use:

```powershell
Copy-Item "NewMMLab\public\imgcopy\team\*.*" "OnePageMML\public\imgcopy\team\" -Force
```

## Step 3: Add Team Members to Database

### Option A: Using SQL Script (Quick Method)

1. Open phpMyAdmin or your MySQL client
2. Select the `multimodal_lab` database
3. Go to the "SQL" tab
4. Copy and paste the SQL from `database/insert_team_members.sql`
5. Update the team member names, positions, image paths, and social media URLs
6. Click "Go" to execute

### Option B: Using PHP Admin Panel

If you have the PHP admin panel set up:
1. Navigate to `http://localhost/MultimodalL/admin/login.php`
2. Login with your admin credentials
3. Go to Team Management
4. Click "Add New Member"
5. Fill in the details:
   - **Name**: Team member's full name
   - **Position**: Their role/position
   - **Image**: Path relative to public folder (e.g., `/imgcopy/team/filename.png`)
   - **Social Media URLs**: Facebook, LinkedIn, Instagram, YouTube (optional)
   - **Status**: Active/Inactive
   - **Display Order**: Number for sorting (lower numbers appear first)

## Step 4: Verify

After adding team members:
1. Restart your Next.js development server
2. Navigate to the Team section on your website
3. Team members should appear automatically

## Image Path Format

When adding team member images, use this format:
- ✅ Correct: `/imgcopy/team/member.jpg`
- ❌ Wrong: `imgcopy/team/member.jpg` (missing leading slash)
- ❌ Wrong: `assets/img/team/member.jpg` (wrong path)

## Available Team Images

The following team images are available in `public/imgcopy/team/`:
- `Anil.png`
- `Rahul Sir.jpg`
- `Srishti.jpg`
- `Subhash.jpg`
- `RS.png`
- `SR.png`
- `SP copy.png`
- `vl-team-1.1.png` through `vl-team-4.4.png` (placeholder images)

## Example SQL Insert

```sql
INSERT INTO `team_members` 
(`name`, `position`, `image`, `linkedin_url`, `status`, `display_order`) 
VALUES 
('Dr. John Doe', 'Lab Director', '/imgcopy/team/member.jpg', 'https://www.linkedin.com/in/johndoe', 'active', 1);
```

## Updating Team Members

To update a team member, you can:
1. Use the PHP admin panel (if available)
2. Run an UPDATE SQL query:

```sql
UPDATE team_members 
SET name = 'Updated Name', 
    position = 'Updated Position',
    image = '/imgcopy/team/new-image.jpg'
WHERE id = 1;
```

## Environment Variables

Make sure your `.env.local` file has the correct database credentials:

```env
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=multimodal_lab
```

