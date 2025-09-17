import{r as x,j as e}from"./iframe-BKOyO0tU.js";import{F as t}from"./FileDropZone-Bv8p2YH5.js";import{S as u}from"./Section-DcBOfrzF.js";import{F}from"./FileCardList-CwE-67co.js";import{F as f}from"./FileCard-DCVbtu4r.js";import{u as E,F as W,t as G}from"./Form-DlZgNljl.js";import{B as s}from"./Button-BRmnXyIg.js";import{A as M}from"./ActionGroup-DEeYD_cT.js";import{_ as j,$ as q}from"./IconWarning-WHLX57m9.js";import{H as g}from"./Heading-D4sbKPQv.js";import{F as h}from"./FileField-C9LFTacx.js";import{T as v}from"./Text-ExzQZ1Qc.js";import"./IllustratedMessage-AIP5q4pC.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DS9p18js.js";import"./mergeRefs-D0EZPsCM.js";import"./index-Dkj0bwU1.js";import"./utils-B2BekvYW.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-ACnzImZy.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-kfVNblq3.js";import"./useFocus-dHggTvNn.js";import"./useCollator-CK3XalJA.js";import"./context-wvutwpZE.js";import"./useLocalizedStringFormatter-D0EJq48y.js";import"./Button-DqwKzt0W.js";import"./ProgressBar-w7N8Fjyu.js";import"./Label-Vv3VD8Wn.js";import"./Hidden-DB9d8bX3.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CfgifMFV.js";import"./useFocusRing-D97-YwB6.js";import"./useFocusable-C3wI1ws-.js";import"./VisuallyHidden-hdWyDAKj.js";import"./ContextMenuSection-DnHutdVr.js";import"./Action-C_4EL_0e.js";import"./context-rPjQ9i-i.js";import"./useStatic-DBBw__yr.js";import"./browser-8Kbc9Tso.js";import"./getActionGroupSlot-mCG5t0cx.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BbUqm1un.js";import"./RSPContexts-BmPvawj4.js";import"./OverlayArrow-CigCDiMF.js";import"./useControlledState-B16HJi6R.js";import"./Collection-B9hkeg3n.js";import"./CollectionBuilder-We_6F8vb.js";import"./Separator-D6PmSFnu.js";import"./Group-iIjIB8eM.js";import"./SearchField-BqOdnuK_.js";import"./FieldError-D2kmkBqC.js";import"./Form-D-YH0smr.js";import"./useTextField-BsmA_XUC.js";import"./useFormReset-ONA6akXl.js";import"./TextField-tmvkgR0S.js";import"./useEvent-DwmS6HpG.js";import"./SelectionManager-CLkO3KW8.js";import"./FocusScope-Sz51FCf6.js";import"./ColumnLayout-C3lARoRI.js";import"./Avatar-BdK8BCU9.js";import"./AlertIcon-DfoV-BMD.js";import"./Image-CoVDx-bH.js";import"./Link-p6dzj-zf.js";import"./ButtonView-SD8FVTD_.js";import"./ContextMenuContent-BMEiJXhF.js";import"./Popover-Cs1rFuXv.js";import"./DialogTriggerView-D92SRtaq.js";import"./Switch-Bv-tj7VR.js";import"./Label-DvNp2qob.js";import"./useToggleState-he4B6Zr1.js";import"./FieldError-Da4EtItW.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-B8cx3qaz.js";import"./Heading-CmuzmpL9.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-BBGOeiRU.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,gr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const n=E(),i=G();return e.jsxs(W,{form:n,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...n.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const hr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,hr as __namedExportsOrder,gr as default};
