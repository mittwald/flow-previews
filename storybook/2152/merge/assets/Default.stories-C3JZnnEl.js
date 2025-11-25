import{r as x,j as e}from"./iframe-Damah4Gk.js";import{K as t,s as u}from"./Modal-B_yQEjWS.js";import{S as F}from"./Section-Nvq9HUcO.js";import{F as f,d as g}from"./FileCardList-Ci5r3U-c.js";import{u as S,F as C,t as D}from"./Form-BOLeESCu.js";import"./ResetButton-CsNAH45N.js";import{B as s}from"./Button-DRLWgNzR.js";import{A as y}from"./ActionGroup-DEjgbrdM.js";import{_ as j,$ as O}from"./IconWarning-C31Nhmtw.js";import{H as h}from"./Heading-DZZNbrhC.js";import{T as b}from"./Text-CM2awg96.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-CEjum6Vy.js";import"./flowComponent-CYYwi6hk.js";import"./index-13wtP10s.js";import"./index-CEgKTzya.js";import"./context-DFVuuGoX.js";import"./Button-D6H5v8ae.js";import"./utils-DZ-wAWvz.js";import"./ProgressBar-ApaXpyYi.js";import"./Hidden-CW7-PSlS.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Ame_q6FO.js";import"./useFocusRing-CjNeZb4R.js";import"./useFocusable-BIU-PHPJ.js";import"./RSPContexts-CTihTM1c.js";import"./Collection-VhWDtA4s.js";import"./CollectionBuilder-Be73SkTZ.js";import"./SelectionIndicator-Bnf6nu3E.js";import"./Separator-CcuGyaw4.js";import"./browser-BpoY0pz3.js";import"./useLocalizedStringFormatter-DBwS74mm.js";import"./useStatic-BEJRqnxO.js";import"./LoadingSpinner-1d0BHocu.js";import"./Flex-OzeXLOGS.js";import"./Accordion-Cw4810g4.js";import"./Alert-Cx3wd6pS.js";import"./AlertIcon-DULCpNPH.js";import"./AlertBadge-DNrr8zSV.js";import"./Align-C4GA7Znj.js";import"./Avatar-Cai0w9S3.js";import"./AvatarStack-sta7pAol.js";import"./BigNumber-CNHEALEu.js";import"./Breadcrumb-BiBovG4Q.js";import"./Link-BsL3p7F7.js";import"./Legend-B4DJDWjw.js";import"./Color-qtzJcxFz.js";import"./TableFooterRow-BGQmG6-s.js";import"./SkeletonText-D5TwXMfM.js";import"./Content-D81btMoA.js";import"./Label-BCkQwiDC.js";import"./CounterBadge-D9Iy1GBz.js";import"./DonutChart-hzKFEReV.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Bp6SKaJw.js";import"./Header-Duz7H3Fe.js";import"./Image-7D4tddpj.js";import"./Initials-CSjNV__V.js";import"./InlineCode-Cg-iYsVS.js";import"./LayoutCard-C33sIfEG.js";import"./Separator-9du0K4-M.js";import"./MessageSeparator-BK4KxRRw.js";import"./NavigationGroup-DLgkr7wA.js";import"./Notification-D6I6SJC0.js";import"./NotificationProvider-CEo1qSg-.js";import"./ControlledNotification-CjMfLUpX.js";import"./ProgressBar-DbMvGVxW.js";import"./Rating-BnbEvWoV.js";import"./Skeleton-BZR1-od5.js";import"./EmulatedBoldText-CePfFl55.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,Ne={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},L=B("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(h,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(F,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(f,{children:[...i.watch("file")??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    accept: "image/png"
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconImage />
          <Heading>Drop image</Heading>
          <Text>Only image/png images are allowed.</Text>
          <FileField name="file" onChange={setFiles}>
            <Button>Select image</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconUpload />
          <Heading>Drop files</Heading>
          <FileField name="file" onChange={setFiles}>
            <Button>Select files</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <Field name="file" rules={{
          required: "Please choose a file"
        }}>
            <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
              <IconUpload />
              <Heading>Drop file</Heading>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </FileDropZone>
          </Field>
          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...d.parameters?.docs?.source}}};const Pe=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Disabled,c as Multiple,m as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,Pe as __namedExportsOrder,Ne as default};
