import{r as x,j as e}from"./iframe-CqlVwSqw.js";import{F as t}from"./FileDropZone-B7lbxlEc.js";import{S as u}from"./Section-cFGMqHWs.js";import{F}from"./FileCardList-DpncffRe.js";import{F as f}from"./FileCard-ChQraFM8.js";import{u as E,F as W,t as G}from"./Form-C_Odkr89.js";import{B as s}from"./Button-OTaF8oie.js";import{A as M}from"./ActionGroup-BZ6cPQJ8.js";import{_ as j,$ as q}from"./IconWarning-CQ60jK8P.js";import{H as g}from"./Heading-DgHdlda3.js";import{F as h}from"./FileField-D-rrk9Qg.js";import{T as v}from"./Text-CQKhljzJ.js";import"./IllustratedMessage-kbuQNVVy.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BuREg09C.js";import"./mergeRefs-Cx0s-cU7.js";import"./index-BuKaDIt4.js";import"./utils-B7PoWZoE.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BcRGqQ7g.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-B6FfxehJ.js";import"./useFocus-qWrFSXYF.js";import"./useCollator-CpH_e3F2.js";import"./context-QfY8Pr6d.js";import"./useLocalizedStringFormatter-BiVzy_IK.js";import"./Button-2nj66ItS.js";import"./ProgressBar-B0gZeOOM.js";import"./Label-CpU_ziWP.js";import"./Hidden-tYtqWYMe.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-5TW4P5t1.js";import"./useFocusRing-DLxcniMF.js";import"./useFocusable-BReVx9rr.js";import"./VisuallyHidden-leZhq3qV.js";import"./ContextMenuSection-DZkdAbKV.js";import"./Action-BP4V_Ghr.js";import"./context-CxE1sBmK.js";import"./useStatic-BR1_jZPV.js";import"./browser-D8TCc1uG.js";import"./getActionGroupSlot-DdOlkyEE.js";import"./dynamic-BWXPpint.js";import"./Popover-BBrX7Bk6.js";import"./DialogTriggerView-BZ0wf3vM.js";import"./RSPContexts-C439z8nI.js";import"./ClearPropsContextView-C3Bv20Xw.js";import"./useControlledState-DZt2Tj7Y.js";import"./FocusScope-Bgk9tnAX.js";import"./Collection-DMTTSBS8.js";import"./CollectionBuilder-EuTbufj2.js";import"./Separator-PuUe3HZt.js";import"./Group-DKePUrRV.js";import"./SearchField-C2GAQJuB.js";import"./FieldError-CjaQ5IB_.js";import"./Form-Ce3Yvr6A.js";import"./useTextField-g_oQkODH.js";import"./useFormReset-DOLEs5qD.js";import"./TextField-BmXGUsbn.js";import"./useEvent-Bpofckl7.js";import"./SelectionManager-BUQAScfd.js";import"./Switch-DmT08Svi.js";import"./Label-WgiBu-Dj.js";import"./useToggleState-DDXcGrX6.js";import"./ColumnLayout-B7eEAzNb.js";import"./Avatar-CiN6pfDt.js";import"./AlertIcon-J_-DFXss.js";import"./Image-Tjm8_j0v.js";import"./Link-Bwg2SkAq.js";import"./ButtonView-CIub2gk0.js";import"./ContextMenuTriggerView-COzLmzUJ.js";import"./FieldError-Cyj__5dL.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-3xwEonu_.js";import"./Heading-Derm1hNn.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-C871-J_1.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
