import{r as g,j as e}from"./iframe-9NvHEEYX.js";import{F as t}from"./FileDropZone-DrVXS7HA.js";import{S as d}from"./Section-BzjEtJr9.js";import{F as u}from"./FileCardList-CGHTDXxz.js";import{F}from"./FileCard-5qX-0VmU.js";import{u as k,F as U,t as w}from"./Form-CEzK2E1I.js";import{B as s}from"./Button-DNkWV-Zy.js";import{A as E}from"./ActionGroup-CQgUAs9m.js";import{_ as x,$ as R}from"./IconWarning-BrSB4tEd.js";import{H as f}from"./Heading-D_Pt2E9r.js";import{F as h}from"./FileField-Bc_3_KO3.js";import{T as W}from"./Text-DmCU-xjB.js";import"./IllustratedMessage-CnNMCcYS.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CqBUeMMu.js";import"./mergeRefs-C771JiYT.js";import"./index-CxV9xeMB.js";import"./utils-phTOhdhB.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BvWwS3Z5.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BM-ocsZo.js";import"./useFocus-D6PAQN6n.js";import"./useCollator-BvoG3B46.js";import"./context-1WNE-E4a.js";import"./useLocalizedStringFormatter-DS1f0b9q.js";import"./Button-BcHYciFT.js";import"./ProgressBar-OiyktaR6.js";import"./Label-BnOBL7z7.js";import"./Hidden-yLzo_Xn1.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B41vbTz8.js";import"./useFocusRing-B-QDi9By.js";import"./useFocusable-B9Hhp3CR.js";import"./VisuallyHidden-BMUrvrGU.js";import"./ContextMenuSection-0a3H8mws.js";import"./Action-DrNj8V5h.js";import"./context-BhkBgBm1.js";import"./useStatic-CR_xkm7d.js";import"./browser-bwKj2ElG.js";import"./getActionGroupSlot-v3xFcxcI.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CIsBrKRV.js";import"./RSPContexts-C2QF7PgZ.js";import"./OverlayArrow-Csc6TqF8.js";import"./useControlledState-QTuKyMuz.js";import"./Collection-CLjZHuNo.js";import"./CollectionBuilder-BHg4Vaik.js";import"./Separator-CzXxLIRa.js";import"./Group-HJeSUD3y.js";import"./SearchField-BZ4AdFAe.js";import"./FieldError-osHXMSr-.js";import"./Form-Bv_h1ugL.js";import"./useTextField-DLSWgg2h.js";import"./useFormReset-CqIGJUAV.js";import"./TextField-CFZkN_yv.js";import"./useEvent-DCcWwaFm.js";import"./SelectionManager-Q48diFGT.js";import"./FocusScope-pZ9Wg3C8.js";import"./ColumnLayout-Bm03lzho.js";import"./Avatar-DU6kOI9R.js";import"./AlertIcon-B2ECeuWU.js";import"./Image-BPM7sOON.js";import"./Link-CVFAfQKC.js";import"./ButtonView-BJMyhAsn.js";import"./ContextMenuContent-BPbTuPEW.js";import"./Popover-C5ED0s7q.js";import"./DialogTriggerView-ZMPabgU7.js";import"./Switch-BmVfJEIK.js";import"./Label-Bp2WajZU.js";import"./useToggleState-CO3ErD0a.js";import"./FieldError-B6ipGGiX.js";import"./LoadingSpinner-8k09TVCC.js";import"./Heading-M61hX7dC.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-D0lgjAwv.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},M=G("submit"),a={},m={args:{isDisabled:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(R,{}),e.jsx(f,{children:"Drop image"}),e.jsx(W,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=k(),i=w();return e.jsxs(U,{form:n,onSubmit:M,children:[e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(E,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var j,S,C;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,b,y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
