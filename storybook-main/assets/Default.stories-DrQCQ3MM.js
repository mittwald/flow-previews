import{r as x,j as e}from"./iframe-DwZ8STeX.js";import{F as t}from"./FileDropZone-C2VyVhht.js";import{S as u}from"./Section-ClBJebLo.js";import{F}from"./FileCardList-DrXgU0o-.js";import{F as f}from"./FileCard-CrB_4uJP.js";import{u as E,F as W,t as G}from"./Form-DB-9BDR2.js";import{B as s}from"./Button-DviFkjeq.js";import{A as M}from"./ActionGroup-CghJCTXs.js";import{_ as j,$ as q}from"./IconWarning-dtP1FcGg.js";import{H as g}from"./Heading-LQ8vefRa.js";import{F as h}from"./FileField-CtcfqzV9.js";import{T as v}from"./Text-O3JAN1OQ.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-DYWbJeBr.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B5_7XuIt.js";import"./index-ULfo01cY.js";import"./index-DRXVqLbm.js";import"./utils-7Pnsuj4A.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BcrniBgV.js";import"./filterDOMProps-CghfNOdR.js";import"./Label-DpGi0C14.js";import"./Hidden-CV41pM0d.js";import"./useFocus-BONLbswZ.js";import"./useCollator-Cp0ZA5x6.js";import"./context-B00wSq60.js";import"./useLocalizedStringFormatter-B7gF29kp.js";import"./Button-CkDO_RvR.js";import"./ProgressBar-CsC-_1Kt.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-JMMpWwD2.js";import"./useFocusRing-Bg4FiEXG.js";import"./useFocusable-p3-NtQMC.js";import"./VisuallyHidden-VLSV2bjz.js";import"./ContextMenuSection-ZF-vqHWD.js";import"./Action-bmScN_4O.js";import"./context-DCjwncLb.js";import"./useStatic-BQF2lsen.js";import"./browser-DDdNHtRK.js";import"./getActionGroupSlot-CSCOifJo.js";import"./dynamic-DhSxKtV5.js";import"./Dialog-2PCEZ6kq.js";import"./RSPContexts-CnTUB1D3.js";import"./OverlayArrow-BzoITITy.js";import"./useControlledState-Blay967p.js";import"./Collection-C8ZYuLoW.js";import"./CollectionBuilder-CkIB4w9D.js";import"./context-DapI3jdg.js";import"./Separator-D_cW8HVn.js";import"./SelectionManager-CYnwAR0E.js";import"./useEvent-wDKyQN9g.js";import"./FocusScope-CIj22QkH.js";import"./ColumnLayout-Wcgd239S.js";import"./Avatar-CfcVnMR7.js";import"./AlertIcon-Bxy-cwl_.js";import"./Image-D2YGQwzy.js";import"./Link-I7BY8Ydt.js";import"./ButtonView-B80wrKf2.js";import"./ContextMenuTriggerView-AKGaD3mi.js";import"./ContextMenuTrigger-DgfPF1GW.js";import"./OverlayTrigger-DRZrZrYn.js";import"./ControlledNotification-D5rYnObm.js";import"./OverlayContextProvider-BQAK-WIK.js";import"./FieldError-DOIfsPUC.js";import"./FieldError-CX3z6nx3.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-C4ZuAlrP.js";import"./Heading-DjEClEsb.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-DWWt7inC.js";import"./Input-DPWebHIT.js";import"./useMakeFocusable-BLJfe8lC.js";import"./EmulatedBoldText-Cn2ModP-.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=l.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=m.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const Fr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Disabled,c as Multiple,m as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,Fr as __namedExportsOrder,ur as default};
