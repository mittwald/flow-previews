import{r as x,j as e}from"./iframe-BvEN2NvC.js";import{H as t,q as d}from"./TimeField-lCDwSgC8.js";import{S as u}from"./Section-DxQGOPA_.js";import{F,b as f}from"./FileCardList-wULZQ2pe.js";import{u as S,F as C,t as D}from"./Form-DBSfX1dx.js";import{S as b}from"./ResetButton-883lRELC.js";import{B as g}from"./Button-Bs-8xdNz.js";import{A as y}from"./ActionGroup-BZJifhVY.js";import{_ as j,$ as B}from"./IconWarning-BXkJ-YfP.js";import{H as h}from"./Heading-BmIYVqpT.js";import{T as O}from"./Text-B-pkYbpH.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-O5-VKPQz.js";import"./mergeRefs-g8AQtJ3m.js";import"./index-Cj5OZb7o.js";import"./clsx-B-dksMZM.js";import"./Accordion-BCRlOG0V.js";import"./dynamic-DLGtdFUV.js";import"./Alert-C42HKgo7.js";import"./AlertIcon-DIx0PRwu.js";import"./useLocalizedStringFormatter-DGN2LQ2z.js";import"./context-BaB4gzT5.js";import"./AlertBadge-XnLcIBhb.js";import"./Align-BNYYkpwl.js";import"./Popover-DQy7sKpB.js";import"./context-YRnoeiMa.js";import"./Button-rdkFrasx.js";import"./utils-C9Kbpp7Q.js";import"./ProgressBar-BQTQq0xH.js";import"./Hidden-BwWPEWcQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CLF9PT1b.js";import"./useFocusable-CY4PxcCA.js";import"./RSPContexts-BVxsMlKh.js";import"./Collection-2Wi3GcVI.js";import"./CollectionBuilder-BPHXmLic.js";import"./SelectionIndicator-BH4md7QJ.js";import"./Separator-B9TFzlzp.js";import"./browser-8558U_eE.js";import"./useStatic-mqBjZ187.js";import"./OverlayTrigger-C-OXtxoJ.js";import"./TableFooterRow-Bbn0J-Fj.js";import"./SkeletonText-Bhrpszsw.js";import"./Avatar-DoJW0BST.js";import"./AvatarStack-Q_naNyxA.js";import"./Badge-By_J3NvW.js";import"./BigNumber-CCiAKU5q.js";import"./Breadcrumb-hvZPW9kp.js";import"./Link-8ro0Mgm2.js";import"./Legend-CWg-OgU1.js";import"./Color-UnoQ_G4y.js";import"./Content-CW2666Kc.js";import"./Label-RkJmXprF.js";import"./ContextualHelpTrigger-Dg6Q6BSc.js";import"./CounterBadge-29Eky_dN.js";import"./DonutChart-hAMSRr4O.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BPYNB-H_.js";import"./Header-CzZTtWKn.js";import"./Image-DcRVgG1x.js";import"./Initials-CMzRsNMX.js";import"./InlineCode-BJIBhEMp.js";import"./PopoverTrigger-CZadA-q7.js";import"./LoadingSpinner-sib-jng1.js";import"./Separator-DbRA9--m.js";import"./Message-CWiHvRIx.js";import"./MessageSeparator-BcRpZ2Jp.js";import"./NavigationGroup-BIJMiTrt.js";import"./Notification-Z9SSqstJ.js";import"./NotificationProvider-Bd1F4Dho.js";import"./ProgressBar-DlKcEA1p.js";import"./Rating-C71hnCIK.js";import"./Skeleton-C-NZiBB5.js";import"./EmulatedBoldText-6Mje0LKd.js";const{action:H}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=H("submit"),s={},a={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},m={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(B,{}),e.jsx(h,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{children:e.jsx(g,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(b,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
          <SubmitButton>Upload</SubmitButton>
        </ActionGroup>
      </Form>;
  }
}`,...c.parameters?.docs?.source}}};const ze=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,l as ReadOnly,m as WithAcceptedTypes,c as WithReactHookForm,ze as __namedExportsOrder,$e as default};
