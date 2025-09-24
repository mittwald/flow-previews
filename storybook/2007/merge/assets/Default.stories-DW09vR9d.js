import{r as x,j as e}from"./iframe-upPjViUi.js";import{F as t}from"./FileDropZone-B3OAQmal.js";import{S as u}from"./Section-6RmnC13-.js";import{F}from"./FileCardList-DPsYSzSR.js";import{F as f}from"./FileCard-CYNDz6la.js";import{u as E,F as W,t as G}from"./Form-BA8KN0Ra.js";import{B as s}from"./Button-BdUtk4-2.js";import{A as M}from"./ActionGroup-D0ROdOJb.js";import{_ as j,$ as q}from"./IconWarning-CwNATdER.js";import{H as g}from"./Heading-BedWGYuH.js";import{F as h}from"./FileField-CYkrUIEz.js";import{T as v}from"./Text-DrOfxU9W.js";import"./IllustratedMessage-NCpTH_bY.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-yJMP1aPs.js";import"./mergeRefs-q2W69vto.js";import"./index-RP-73gJI.js";import"./utils-D7Ud1rY1.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CPJx-aex.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Bv0sV64n.js";import"./useFocus-CKR8Kfvk.js";import"./useCollator-C5XQM9l2.js";import"./context-DUCBVekV.js";import"./useLocalizedStringFormatter-BrLv4P2q.js";import"./Button-CWtnBlrz.js";import"./ProgressBar-B2varhWC.js";import"./Label-VDo2pjQH.js";import"./Hidden-DUPaGITp.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-nNimJg5a.js";import"./useFocusRing-DBg1NGxh.js";import"./useFocusable-D-QSeIiW.js";import"./VisuallyHidden-svNoe17i.js";import"./ContextMenuSection-3Je0aaRW.js";import"./Action-Cb9jSIVt.js";import"./context-DSTBS2xh.js";import"./useStatic-BNGbJ6l6.js";import"./browser-BQR41_Xo.js";import"./getActionGroupSlot-Dx3eCL3t.js";import"./dynamic-Cvppd2SX.js";import"./Popover-CM6Xbo5y.js";import"./DialogTriggerView-CYID30AX.js";import"./RSPContexts-CDfzDcm_.js";import"./ClearPropsContextView-CWLdfkB7.js";import"./useControlledState-DJQ8YErb.js";import"./FocusScope-cBvdiCGC.js";import"./Collection-C7hZcg-r.js";import"./CollectionBuilder-CvJppZRn.js";import"./Separator-NH6jHWUN.js";import"./Group-ClmTbc4u.js";import"./SearchField-DoTA-SfC.js";import"./FieldError-Dxc2xglq.js";import"./Form-CCPP_JFl.js";import"./useTextField-BoNbQLwS.js";import"./useFormReset-BGI-E8mB.js";import"./TextField-DM_RTlmg.js";import"./useEvent-DEpz7Cvb.js";import"./SelectionManager-CyC5TvbY.js";import"./Switch-BhwnwwjS.js";import"./Label-RDx-2swG.js";import"./useToggleState-BeIkbzV7.js";import"./ColumnLayout-Chfnizzs.js";import"./Avatar-BLNGJFMl.js";import"./AlertIcon-CYvOwVV-.js";import"./Image-CDUUDJWI.js";import"./Link-DQmq8o69.js";import"./ButtonView-CeF7-VfM.js";import"./ContextMenuTriggerView-CJMJbj0X.js";import"./FieldError-Cn-v5KPW.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-CzeOX1VK.js";import"./Heading-Cw_qLrj_.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-gAgggVs5.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
