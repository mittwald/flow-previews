import{r as x,j as e}from"./iframe-B7faIpc2.js";import{H as t,q as u}from"./TimeField-DJeF6tHL.js";import{S as F}from"./Section-BRbBI6XS.js";import{F as f,b as g}from"./FileCardList-BmGtRGBl.js";import{u as S,F as C,t as D}from"./Form-DXc6FTdJ.js";import"./ResetButton-CZyTfOXA.js";import{B as s}from"./Button-C65qYEPV.js";import{A as y}from"./ActionGroup-lrlsSsuG.js";import{_ as j,$ as b}from"./IconWarning-RXBUNZpo.js";import{H as h}from"./Heading-DQAVgOUX.js";import{T as O}from"./Text-BW5jU57O.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-DvcRwh-b.js";import"./mergeRefs-DocynWAk.js";import"./index-Cm9A5t92.js";import"./clsx-B-dksMZM.js";import"./Accordion-rRmjtL7-.js";import"./dynamic-DNE-pYSI.js";import"./Alert-CsDQ-kYA.js";import"./AlertIcon-BgMVJ-0R.js";import"./useLocalizedStringFormatter-CHCbdM4l.js";import"./context-BdWnF-Tv.js";import"./AlertBadge-C_NAxNEx.js";import"./Align-DuctyuK7.js";import"./Popover-QuqvLiOu.js";import"./context-BRyJJeXK.js";import"./Button-Br-rQQva.js";import"./utils-Dgdioq7j.js";import"./ProgressBar-Cpr3Nm-I.js";import"./Hidden-CI4Kyuw4.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BnSOUYVK.js";import"./useFocusable-BknYbShF.js";import"./RSPContexts-Bww9Tcci.js";import"./Collection-B_b9uSvy.js";import"./CollectionBuilder-BF29HNem.js";import"./SelectionIndicator-CVtQG64z.js";import"./Separator-BwGATjgB.js";import"./browser-CF6H-xjM.js";import"./useStatic-d3wvmCdr.js";import"./OverlayTrigger-mzSlkfM-.js";import"./TableFooterRow-BTQIZIFr.js";import"./SkeletonText-C_Fa3H2l.js";import"./Avatar-Dz-cMFo8.js";import"./AvatarStack-2jPjq7st.js";import"./Badge-BaUtza3s.js";import"./BigNumber-BwNV7DHD.js";import"./Breadcrumb-D-mfdRHn.js";import"./Link-BlQ-A0kF.js";import"./Legend-DrznEJ0f.js";import"./Color-COLTRY34.js";import"./Content-DYfcwBs-.js";import"./Label-B8m3uYje.js";import"./ContextualHelpTrigger-CoqA6lQ-.js";import"./CounterBadge-Bnm06nVz.js";import"./DonutChart-B4IQzO-m.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-eNzO0zDz.js";import"./Header-1-tOwrUd.js";import"./Image-Cw48J6Ze.js";import"./Initials-D1wCqKzA.js";import"./InlineCode-SGGc6CuJ.js";import"./PopoverTrigger-Btq07Gqi.js";import"./LoadingSpinner-mrsqqnDm.js";import"./Separator-iil9Ttbd.js";import"./Message-CsQsykjC.js";import"./MessageSeparator-4ehVw1iX.js";import"./NavigationGroup-DCa422EG.js";import"./Notification-CX0MhUUz.js";import"./NotificationProvider-BfOyISvO.js";import"./ProgressBar-CKWJYevm.js";import"./Rating-Dpmi2aI5.js";import"./Skeleton-C2W_Mk7n.js";import"./EmulatedBoldText-C1Px7vMV.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,Ye={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},H=B("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(b,{}),e.jsx(h,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:H,children:[e.jsxs(F,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(f,{children:[...i.watch("file")??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const $e=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Disabled,c as Multiple,m as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,$e as __namedExportsOrder,Ye as default};
