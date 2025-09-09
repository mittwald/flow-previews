import{r as g,j as e}from"./iframe-DVH1JXtP.js";import{F as t}from"./FileDropZone-RA8vONfi.js";import{S as d}from"./Section-QPeHJ69O.js";import{F as u}from"./FileCardList-aY1MDshX.js";import{F}from"./FileCard-BVI0zQBr.js";import{u as k,F as U,t as w}from"./Form-BpB0g6Oe.js";import{B as s}from"./Button-DSdtNwsI.js";import{A as E}from"./ActionGroup-BNnyxEGB.js";import{_ as x,$ as R}from"./IconWarning-CU_Jn-Rh.js";import{H as f}from"./Heading-DPRmeFmU.js";import{F as h}from"./FileField-Dq-w8D1k.js";import{T as W}from"./Text-D1P9H2_H.js";import"./IllustratedMessage-BmXlXeVm.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-FHPOrKi5.js";import"./mergeRefs-C62y_F-P.js";import"./index-CtJAiOn7.js";import"./utils-BK8baG-i.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CBJ04nMy.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-NP7-116U.js";import"./useFocus-CQVh66mU.js";import"./useCollator-DOzXEcud.js";import"./context-CdYfmHmn.js";import"./useLocalizedStringFormatter-DaQD7sH9.js";import"./Button-DzMSo0AA.js";import"./ProgressBar-BUKyhVQw.js";import"./Label-CMyz7O-I.js";import"./Hidden-weVCu2TA.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BeW5A3Oi.js";import"./useFocusRing-DRg_t-7O.js";import"./useFocusable-T2p-jFMn.js";import"./VisuallyHidden-DtF4wZC2.js";import"./ContextMenuSection-CAJ8w-gs.js";import"./Action-Dfm0OsG2.js";import"./context-agOgnAGz.js";import"./useStatic-DdpPKhEz.js";import"./browser-C28Fm9d0.js";import"./getActionGroupSlot-B8kYKXqG.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CmRE6s2J.js";import"./RSPContexts-B3CI5xG8.js";import"./OverlayArrow-ChkDdsgW.js";import"./useControlledState-Urxw2XXp.js";import"./Collection-D1ordEmx.js";import"./CollectionBuilder-ChFPkv_k.js";import"./Separator-QeHbXW8z.js";import"./Group-DXbOZXZb.js";import"./SearchField-BBggbv2v.js";import"./FieldError-DwXG4Veb.js";import"./Form-BPwJmxNt.js";import"./useTextField-qeWtBHoH.js";import"./useFormReset-rRCeDrNW.js";import"./TextField-DIPy1Cq_.js";import"./useEvent-D6G3dElA.js";import"./SelectionManager-olLeBgyH.js";import"./FocusScope-BiiCP1_E.js";import"./ColumnLayout-1jmWvvVV.js";import"./Avatar-Cd7Wkoco.js";import"./AlertIcon-C9APYlkG.js";import"./Image-fbtldiYJ.js";import"./Link-CLQ4f7r9.js";import"./ButtonView-DPXtRNfN.js";import"./ContextMenuContent-G7WFmcdo.js";import"./Popover-BgKKCKbh.js";import"./DialogTriggerView-BkHHTKiO.js";import"./Switch-aW4aHW5L.js";import"./Label-CxrJqwXs.js";import"./useToggleState-BfCVlH2X.js";import"./FieldError-4LhCBGmq.js";import"./LoadingSpinner-BkBLmddP.js";import"./Heading-D1ZVwUdr.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-Bdvunp4L.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},M=G("submit"),a={},m={args:{isDisabled:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(R,{}),e.jsx(f,{children:"Drop image"}),e.jsx(W,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=k(),i=w();return e.jsxs(U,{form:n,onSubmit:M,children:[e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(E,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var j,S,C;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,b,y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
