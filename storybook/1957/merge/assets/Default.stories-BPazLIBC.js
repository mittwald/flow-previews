import{r as g,j as e}from"./iframe-CVONDZxG.js";import{F as t}from"./FileDropZone-Cs8-L4pE.js";import{S as d}from"./Section-CbroYpUy.js";import{F as u}from"./FileCardList-DSeuUtUq.js";import{F}from"./FileCard-CijqAtlg.js";import{u as k,F as U,t as w}from"./Form-CVeywl-a.js";import{B as s}from"./Button-CPWkxiPl.js";import{A as E}from"./ActionGroup-CulJXRbN.js";import{_ as x,$ as R}from"./IconWarning-CjssIWkt.js";import{H as f}from"./Heading-x080Pesz.js";import{F as h}from"./FileField-DNaFJMkb.js";import{T as W}from"./Text-gWNENs-O.js";import"./IllustratedMessage-CT0Woav9.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHJ1i56Q.js";import"./mergeRefs-TXfZ5z39.js";import"./index-C4vkAaOo.js";import"./utils-BSjfMHTl.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Doa1PxMD.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-jVeBX_ap.js";import"./useFocus-D78mW_re.js";import"./useCollator-DDJs2P-f.js";import"./context-Bs2g7JPB.js";import"./useLocalizedStringFormatter-CII2PiuM.js";import"./Button-38xdtiYe.js";import"./ProgressBar-DrI-uHFO.js";import"./Label-DJefMWg6.js";import"./Hidden-BwiNP3dS.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-zhVroEZ0.js";import"./useFocusRing-B7s00iLq.js";import"./useFocusable-DkfZWGFH.js";import"./VisuallyHidden-C8_ZT0Uw.js";import"./ContextMenuSection-DgG1drws.js";import"./Action-CutvWoZ3.js";import"./context-DdZgH6qQ.js";import"./useStatic-Duh0tpLB.js";import"./browser-BiAec6cY.js";import"./getActionGroupSlot-WI0cGZqP.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BUUqsfzD.js";import"./RSPContexts-DNP2NapF.js";import"./OverlayArrow-DGSmKKnj.js";import"./useControlledState-KXE4Dwqt.js";import"./Collection-CaTnxI7B.js";import"./CollectionBuilder-CePrgAQb.js";import"./Separator-CO7E1Mbo.js";import"./Group-BUf8QsAy.js";import"./SearchField-DsKki_7U.js";import"./FieldError-D3nW9ApF.js";import"./Form-BgCAIeRI.js";import"./useTextField-6Xm8NcSF.js";import"./useFormReset-D4oFtU7p.js";import"./TextField-Bq5WehIb.js";import"./useEvent-CIDboHYb.js";import"./SelectionManager-DQbblkna.js";import"./FocusScope-LX2k-wEc.js";import"./ColumnLayout-BO_xiLLW.js";import"./Avatar-C0fFwxUI.js";import"./AlertIcon-BfnGWdvk.js";import"./Image-QR5crdaB.js";import"./Link-DKZSM0Pn.js";import"./ButtonView-D0q0EIvL.js";import"./ContextMenuContent-Fk4AeYHA.js";import"./Popover-DE9TnM81.js";import"./DialogTriggerView-CZoxH0uq.js";import"./Switch-ByOFMYCy.js";import"./Label-BrXx0WEV.js";import"./useToggleState-C0hwUibT.js";import"./FieldError-uzL1sI7k.js";import"./LoadingSpinner-DIlTVHYE.js";import"./Heading-47qrmuz0.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-CnL_Am8U.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},M=G("submit"),a={},m={args:{isDisabled:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(R,{}),e.jsx(f,{children:"Drop image"}),e.jsx(W,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=k(),i=w();return e.jsxs(U,{form:n,onSubmit:M,children:[e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(E,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var j,S,C;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,b,y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(b=m.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(_=p.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var O,T,Z;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(Z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:Z.source}}};const dr=["Default","Disabled","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,p as Multiple,l as WithAcceptedTypes,c as WithReactHookForm,dr as __namedExportsOrder,cr as default};
