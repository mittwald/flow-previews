import{r as x,j as e}from"./iframe-JrijvI0G.js";import{F as t}from"./FileDropZone-DiArTWZK.js";import{S as u}from"./Section-_sZpzwSW.js";import{F}from"./FileCardList-CfFJbHyw.js";import{F as f}from"./FileCard-hMaZmNEo.js";import{u as E,F as W,t as G}from"./Form-ChtMtnS4.js";import{B as s}from"./Button-nOLp9HyP.js";import{A as M}from"./ActionGroup-CtIuQuZb.js";import{_ as j,$ as q}from"./IconWarning-B3U3_U2s.js";import{H as g}from"./Heading-C_XHAp4M.js";import{F as h}from"./FileField-CMGG6dq3.js";import{T as v}from"./Text-9s7Vdafx.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-BrUw0f9x.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bc6JGim9.js";import"./mergeRefs-CbRd_Ras.js";import"./index-BPCP2ZZE.js";import"./utils-DhZkrhHH.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Bm8Zb_oa.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-D5nQ4vXC.js";import"./useFocus-DA61-eEI.js";import"./useCollator-ChdaOTfc.js";import"./context-CnkMg4nA.js";import"./useLocalizedStringFormatter-M08v5G9w.js";import"./Button-Bp13GR3E.js";import"./ProgressBar-D10mUZdz.js";import"./Label-1jXHzd37.js";import"./Hidden-CHpGmdBq.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-JaoXEhrO.js";import"./useFocusRing-DCbTuOGO.js";import"./useFocusable-DIk21gkV.js";import"./VisuallyHidden-B4SYhrOy.js";import"./ContextMenuSection-B_Wuc4T7.js";import"./Action-CunTtwFt.js";import"./context-CS_K62PD.js";import"./useStatic-9jHtrOTK.js";import"./browser-eHAjn9uV.js";import"./getActionGroupSlot-BuUDRoIK.js";import"./dynamic-BUc0KwfX.js";import"./Popover-irUcUI-O.js";import"./DialogTriggerView-DOh3nc4_.js";import"./RSPContexts-bEimFc0k.js";import"./ClearPropsContextView-Dl_oHLSA.js";import"./useControlledState-DQPwS-UF.js";import"./FocusScope-Bwbpfbbo.js";import"./Collection-yP15xrib.js";import"./CollectionBuilder-CnCpguDd.js";import"./context-SLDg-fw2.js";import"./Separator-D6-9qD1D.js";import"./SelectionManager-C2kTlReE.js";import"./useEvent-BTKtfW_h.js";import"./Switch-BhTGOwor.js";import"./Label-BWdEIo8l.js";import"./useToggleState-CJGhq3Gn.js";import"./useFormReset-Bl0dawgu.js";import"./ColumnLayout-voDN-0pC.js";import"./Avatar-Dd9-yoPg.js";import"./AlertIcon-BdSR7S12.js";import"./Image-DX6LcYCE.js";import"./Link-3TLUsjGm.js";import"./ButtonView-XNSqWzM1.js";import"./ContextMenuTriggerView-SQnTtOr1.js";import"./FieldError-KC3s-9B5.js";import"./FieldError-B0ZHUsLp.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-BpDSxo2f.js";import"./Heading-BW0daRbe.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-OftsP-u_.js";import"./Input-B9FmC8HN.js";import"./EmulatedBoldText-BVZ71ko2.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,Fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const fr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,fr as __namedExportsOrder,Fr as default};
