import{r as x,j as e}from"./iframe-DCk1dltx.js";import{F as t}from"./FileDropZone-CqAjzlZl.js";import{S as d}from"./Section-DrurSGwC.js";import{F as u}from"./FileCardList-DXcqzleO.js";import{F}from"./FileCard-08GT-ZgL.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-BskZzvDk.js";import{B as f}from"./Button-DZuynozn.js";import{A as b}from"./ActionGroup-BFgB1RLe.js";import{_ as j,$ as B}from"./IconWarning-Dty0OPVS.js";import{H as g}from"./Heading-DeB9aMje.js";import{F as h}from"./FileField-C0Vrs6Cb.js";import{T as O}from"./Text-BrHbgyhX.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CJpgT-fM.js";import"./clsx-B-dksMZM.js";import"./flowComponent-T1oQuQvq.js";import"./index-Cq8zlQrR.js";import"./index-CPFdYWIc.js";import"./useFieldComponent-DRONwAvB.js";import"./utils-dLBbTpD9.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-PmoJdoY5.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DUKklMlK.js";import"./useFocus-Dg1ABCcr.js";import"./useCollator-Caa43iXB.js";import"./context-Dv1e9MPf.js";import"./useLocalizedStringFormatter-leVAnmF6.js";import"./useFocusRing-CTkZzC5s.js";import"./Button-DjraAkXw.js";import"./ProgressBar-s8plnM_5.js";import"./Label-D8gqX69D.js";import"./Hidden-DtfyHh-u.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BwKHWgOu.js";import"./useFocusable-CjQRw48Z.js";import"./VisuallyHidden-DsX3-BDW.js";import"./ContextMenuSection-DnWeaq_7.js";import"./Action-CYJGL_dI.js";import"./context-B-YNLj-l.js";import"./useStatic-CBlVxf-j.js";import"./browser-CviVsCbd.js";import"./getActionGroupSlot-Nfo-4-Bh.js";import"./dynamic-BisWu7fc.js";import"./Dialog-Cwy0OKAE.js";import"./RSPContexts-DsTbr3uT.js";import"./OverlayArrow-hOch9Zrk.js";import"./useControlledState-8RsR_43b.js";import"./Collection-X351L5bt.js";import"./CollectionBuilder-B_m-ERV7.js";import"./SelectionIndicator-kCh5PEOZ.js";import"./Separator-CBxzGoiC.js";import"./SelectionManager-Ck4wL-0T.js";import"./useEvent--hc8j0kD.js";import"./FocusScope-5MRFtdj_.js";import"./ColumnLayout-CpLZooOU.js";import"./Avatar-DmGd1gnf.js";import"./AlertIcon-fe496zUR.js";import"./Image-B4Jp7iii.js";import"./Link-A1LlWMZC.js";import"./OptionsButton-DQZu7-cZ.js";import"./ButtonView-mTtK9nwk.js";import"./ContextMenuTriggerView-BeiId8ah.js";import"./ContextMenuTrigger-C3DFOPM3.js";import"./OverlayTrigger-B_1pmhgA.js";import"./OverlayContextProvider-D8VTtXin.js";import"./FieldError-CH94tTsu.js";import"./FieldError-BprKDa8q.js";import"./AlertText-YVWNWcKU.js";import"./useRef-AiAHEOJG.js";import"./LoadingSpinner-CKOTMV9B.js";import"./remote-DvlevvD7.js";import"./Heading-CMNPfOZB.js";import"./useFormValidation-BQhs4ME7.js";import"./Input-B3blwCao.js";import"./EmulatedBoldText-BGXSZcaq.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Xe=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,Xe as __namedExportsOrder,Qe as default};
