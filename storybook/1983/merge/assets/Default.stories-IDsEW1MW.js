import{r as x,j as e}from"./iframe-CqLmdNeC.js";import{F as t}from"./FileDropZone-El-Wa9qa.js";import{S as u}from"./Section-DeB4xJxa.js";import{F}from"./FileCardList-CVm8-LMR.js";import{F as f}from"./FileCard-C-bukulh.js";import{u as E,F as W,t as G}from"./Form-DHIFVkVp.js";import{B as s}from"./Button-Cck2R8d6.js";import{A as M}from"./ActionGroup-CKPFyTY5.js";import{_ as j,$ as q}from"./IconWarning-CMS0_eHL.js";import{H as g}from"./Heading-GFbXOXKR.js";import{F as h}from"./FileField-BREwjnOa.js";import{T as v}from"./Text-BZ3j-6fi.js";import"./IllustratedMessage-C-rKcn4y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CftNG7hR.js";import"./mergeRefs-o29IfSv-.js";import"./index-DuAYVIUn.js";import"./utils-DVF3OaDc.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BpEumjQQ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BygwjnmG.js";import"./useFocus-CLcOeBIv.js";import"./useCollator-BJ0ATcQr.js";import"./context-DzYatHkR.js";import"./useLocalizedStringFormatter-C4FReXuX.js";import"./Button-D6TKDn6h.js";import"./ProgressBar-Bc_l3bRQ.js";import"./Label-DbnvS1ga.js";import"./Hidden-K4MIyCcS.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CKz354k3.js";import"./useFocusRing-B3V5UxLb.js";import"./useFocusable-zATjwRwW.js";import"./VisuallyHidden-DFEHY8aA.js";import"./ContextMenuSection-B-2w8ox3.js";import"./Action-CeDhk6lc.js";import"./context-BV-Ks7Oh.js";import"./useStatic-suMR32Og.js";import"./browser-D8TwyJaY.js";import"./getActionGroupSlot-DLpPTNRU.js";import"./dynamic-DFe3knzM.js";import"./Popover-Cd3uYlMm.js";import"./DialogTriggerView-zx0O_dOm.js";import"./RSPContexts-BcXX2Wqq.js";import"./ClearPropsContextView-CGyUIuEX.js";import"./useControlledState-Blr5WM8A.js";import"./FocusScope-D6JShGuB.js";import"./Collection-BtI4BBrq.js";import"./CollectionBuilder-BR0_mY_7.js";import"./Separator-Bx0e0X1l.js";import"./Group-DSZMysmZ.js";import"./SearchField-Bt3pj5UO.js";import"./FieldError-BRlNdIVM.js";import"./Form-Dz9VUwD7.js";import"./useTextField-CZX3v4eA.js";import"./useFormReset-6nvbbxGv.js";import"./TextField-lXG7M95o.js";import"./useEvent-CulDTTvx.js";import"./SelectionManager-mPjiaJaA.js";import"./Switch-DrI2kS3x.js";import"./Label-B8Yu6jlZ.js";import"./useToggleState-fB_nzWPD.js";import"./ColumnLayout-DJitxdf0.js";import"./Avatar-PTlqhYtK.js";import"./AlertIcon-fQAUaURt.js";import"./Image-C5dH_vqO.js";import"./Link--Og3sIh-.js";import"./ButtonView-Qj92RoGG.js";import"./ContextMenuTriggerView-CsKz6DWi.js";import"./FieldError-BPhKkw68.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-CTcHqu9G.js";import"./Heading-B09eOgMp.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-EL8QFNsm.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=m.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(_=p.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var R,T,Z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(Z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:Z.source}}};var k,U,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
            <IconUpload />
            <Heading>Drop file</Heading>
            <Field name="file" rules={{
            required: "Please choose a file"
          }}>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </Field>
          </FileDropZone>

          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const gr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,gr as __namedExportsOrder,fr as default};
