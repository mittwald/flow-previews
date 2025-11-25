import{r as x,j as e}from"./iframe-CRHerQcT.js";import{K as t,s as u}from"./Modal-CHikTCfT.js";import{S as F}from"./Section-DCbopNVT.js";import{F as f,d as g}from"./FileCardList-BRkY0El4.js";import{u as S,F as C,t as D}from"./Form-CHvE1Qna.js";import"./ResetButton-KhvpTA0a.js";import{B as s}from"./Button-DOdtzIa_.js";import{A as y}from"./ActionGroup-bop6Cb2x.js";import{_ as j,$ as O}from"./IconWarning-S9zVz1Ke.js";import{H as h}from"./Heading-PN47vIIN.js";import{T as b}from"./Text-sklVEIT5.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-JzWN_IYl.js";import"./flowComponent-Po2jQ9NZ.js";import"./index-BbKg1nkj.js";import"./index-DOvz_Dla.js";import"./context-C4Lb4VEy.js";import"./Button-DPVH9eDh.js";import"./utils-B8O46aeb.js";import"./ProgressBar-NMXq-w2-.js";import"./Hidden-BcqgQAy4.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-C5gXDLZB.js";import"./useFocusRing-DdX5Sdo5.js";import"./useFocusable-O8acuieM.js";import"./RSPContexts-DxbMYf-Z.js";import"./Collection-BkWkcg8z.js";import"./CollectionBuilder-CTEpaBir.js";import"./SelectionIndicator-BJEbb9Gg.js";import"./Separator-CIAUU7Mv.js";import"./browser-C1kPNy51.js";import"./useLocalizedStringFormatter-B1bSBhnk.js";import"./useStatic-CvvgeXIU.js";import"./LoadingSpinner-DjcUww4s.js";import"./Flex-Drl5GGOg.js";import"./Accordion-DRGBj4f5.js";import"./Alert-pe0uKkFF.js";import"./AlertIcon-BgWetiy7.js";import"./AlertBadge-DQMWdOiZ.js";import"./Align-DLnBGGPL.js";import"./Avatar-B_AsKOkR.js";import"./AvatarStack-C0_9IyGj.js";import"./BigNumber-C6mS8Wh6.js";import"./Breadcrumb-Wl5kqkjz.js";import"./Link-DtavQq9t.js";import"./Legend-B6gewgni.js";import"./Color-4MH-JGEe.js";import"./TableFooterRow-D_R0KUn8.js";import"./SkeletonText-DT_aA1lI.js";import"./Content-ozSr22eC.js";import"./Label-RXr9Ag3i.js";import"./CounterBadge-D5n1cIT5.js";import"./DonutChart-BzjBcwZM.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BrKKi1jH.js";import"./Header-BkK7wzu1.js";import"./Image-HxAJgvwY.js";import"./Initials-HsORkqZ3.js";import"./InlineCode-DGlO1jad.js";import"./LayoutCard-0IlyXBle.js";import"./Separator-GyMKFIRg.js";import"./MessageSeparator-Bp-V0ng0.js";import"./NavigationGroup-CIbHeakV.js";import"./Notification-BsGc8vQq.js";import"./NotificationProvider-yfmcKWLq.js";import"./ControlledNotification-BLJs-Z1G.js";import"./ProgressBar-D49n6bfx.js";import"./Rating-C48Ki5al.js";import"./Skeleton-DfnIMzY3.js";import"./EmulatedBoldText-CArsfrvv.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,Ne={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},L=B("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(h,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(F,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(f,{children:[...i.watch("file")??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
