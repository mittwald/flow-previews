import{r as x,j as e}from"./iframe-D1JKOwdq.js";import{F as t}from"./FileDropZone-Dpd5Vai3.js";import{S as u}from"./Section-xjezlXwm.js";import{F}from"./FileCardList-BCHhjyAj.js";import{F as f}from"./FileCard-dnFY4seO.js";import{u as E,F as W,t as G}from"./Form-DIybQHuX.js";import{B as s}from"./Button-DG818FIU.js";import{A as M}from"./ActionGroup-Q2_yFNv7.js";import{_ as j,$ as q}from"./IconWarning-DZISCuC-.js";import{H as g}from"./Heading-R_2RsziQ.js";import{F as h}from"./FileField-CD2TSB74.js";import{T as v}from"./Text-Cv35yGBC.js";import"./IllustratedMessage-BEz7uS_M.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CKqNcsdJ.js";import"./mergeRefs-CYbnUoq6.js";import"./index-DOZ5qla4.js";import"./utils-BVsEXjGQ.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BIeeVT6X.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Uyswehsd.js";import"./useFocus-CYEgIwnz.js";import"./useCollator-sKXsPUo5.js";import"./context-Bzqo5E_q.js";import"./useLocalizedStringFormatter-CIU1pqtk.js";import"./Button-DG6zvYi3.js";import"./ProgressBar-4Tm_fzI6.js";import"./Label-CseS0v8E.js";import"./Hidden-Dr2BftiN.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CwJM0Ele.js";import"./useFocusRing-8cxgDEwk.js";import"./useFocusable-wd6aWIaf.js";import"./VisuallyHidden-DUuSn0Sw.js";import"./ContextMenuSection-8CoHO1G8.js";import"./Action-CgsrqEHD.js";import"./context-Cusklrj0.js";import"./useStatic-D26xSXCN.js";import"./browser-BI97FZcU.js";import"./getActionGroupSlot-DpLzBOSg.js";import"./dynamic-ar8rpZDa.js";import"./Popover-CJsB8pDc.js";import"./DialogTriggerView-BgJsodt7.js";import"./RSPContexts-CoUOlwWC.js";import"./ClearPropsContextView-Be28GGXB.js";import"./useControlledState-CYjuzTtD.js";import"./FocusScope-B4gQukNN.js";import"./Collection-Zsa7miPe.js";import"./CollectionBuilder-B5sifEeq.js";import"./Separator-BMEhDY-1.js";import"./Group-B-JYoqhF.js";import"./SearchField-BZI0oCti.js";import"./FieldError-BZfRYFbv.js";import"./Form-CftHRla7.js";import"./useTextField-xidCibEs.js";import"./useFormReset-CG85pNSA.js";import"./TextField-DfMFf88Q.js";import"./useEvent-DQOxTklk.js";import"./SelectionManager-DFpd0p6B.js";import"./Switch-Be2IZpQQ.js";import"./Label-Cf_c9vA3.js";import"./useToggleState-Dan021zf.js";import"./ColumnLayout-BqlmK73Q.js";import"./Avatar-DsFE8OqT.js";import"./AlertIcon-rosmqw-p.js";import"./Image-DhH6npZq.js";import"./Link-C-obq11P.js";import"./ButtonView-CU34M0bg.js";import"./ContextMenuTriggerView-WV87Rfri.js";import"./FieldError-DJpBvO0q.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-D-A5UE94.js";import"./Heading-B9dYxPkj.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-d9mRwZf5.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
