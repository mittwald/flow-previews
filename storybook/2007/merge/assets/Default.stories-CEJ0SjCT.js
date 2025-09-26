import{r as x,j as e}from"./iframe-DkzCwCX4.js";import{F as t}from"./FileDropZone-CD2uuxCu.js";import{S as u}from"./Section-DmfqvBI5.js";import{F}from"./FileCardList-IDD_Bzbf.js";import{F as f}from"./FileCard-DD_eQilT.js";import{u as E,F as W,t as G}from"./Form-Dq-LmidO.js";import{B as s}from"./Button-BnlekXC3.js";import{A as M}from"./ActionGroup-C8VolYTb.js";import{_ as j,$ as q}from"./IconWarning-DW3eva0Y.js";import{H as g}from"./Heading-BRlbbFpw.js";import{F as h}from"./FileField-CHUVlTi6.js";import{T as v}from"./Text-nAHNspGp.js";import"./IllustratedMessage-CV4Swo3u.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-j536x9wb.js";import"./mergeRefs-T0LNBBZh.js";import"./index-BnjSe9nq.js";import"./utils-CLIXtwVU.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-lQk_ytCv.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BJPqeoy6.js";import"./useFocus-ib9l0UKV.js";import"./useCollator-CJfXA3qY.js";import"./context-R4HBJhIj.js";import"./useLocalizedStringFormatter-D8Y9ojCx.js";import"./Button-BmtE6ca-.js";import"./ProgressBar-BPpVJdpP.js";import"./Label-CxXDsSed.js";import"./Hidden-Co6TepXZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Bo4yNuZG.js";import"./useFocusRing-D8oCWed-.js";import"./useFocusable-DGleC9_O.js";import"./VisuallyHidden-CyZzuY0Z.js";import"./ContextMenuSection-DDW5roO_.js";import"./Action-waCXg2Hq.js";import"./context-C3VhVMcy.js";import"./useStatic-DPeMNtEl.js";import"./browser-Dj2wjmgz.js";import"./getActionGroupSlot-OrHKCra6.js";import"./dynamic-BbyFekY5.js";import"./Popover-DLWa551b.js";import"./DialogTriggerView-C0Uk_5SJ.js";import"./RSPContexts-ypxcCxo7.js";import"./ClearPropsContextView-DIYe_PJW.js";import"./useControlledState-BOJEDAaV.js";import"./FocusScope-DTdzqE55.js";import"./Collection-DoEHjGcH.js";import"./CollectionBuilder-BePk8bko.js";import"./Separator-uSA5LFxj.js";import"./Group-0pV7udqg.js";import"./SearchField-Cdw14afw.js";import"./FieldError-Jo1S5986.js";import"./Form-Bd46is8r.js";import"./useTextField-DDEFSut-.js";import"./useFormReset-Dtav30sm.js";import"./TextField-DIeR-UPB.js";import"./useEvent-D_rPsZtc.js";import"./SelectionManager-Dg3ay1FE.js";import"./Switch-CIZmIw2v.js";import"./Label-BxAVz1UC.js";import"./useToggleState-BRwNVh6w.js";import"./ColumnLayout-dWyCawEc.js";import"./Avatar-BeNdTXm1.js";import"./AlertIcon-rUJetufd.js";import"./Image-B9cW3fk7.js";import"./Link-C7q_dDkE.js";import"./ButtonView-B9ZaI5OK.js";import"./ContextMenuTriggerView-baXmujMo.js";import"./FieldError-ZxrKxv-k.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-CQddXTjo.js";import"./Heading-CMyU0Jt0.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-DFUvlzyn.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
