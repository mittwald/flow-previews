import{r as g,j as e}from"./iframe-D8FrJ-CZ.js";import{F as t}from"./FileDropZone-Rj5P33gl.js";import{S as d}from"./Section-7XksVYFo.js";import{F as u}from"./FileCardList-Bu3iUZN4.js";import{F}from"./FileCard-Q8DocOj2.js";import{u as k,F as U,t as w}from"./Form-DWHZtf8w.js";import{B as s}from"./Button-Cq__NSNu.js";import{A as E}from"./ActionGroup-Bf3adsmK.js";import{Y as x,Z as R}from"./IconWarning-C11FXGxU.js";import{H as f}from"./Heading-BCUHArUZ.js";import{F as h}from"./FileField-Bk6MqUp6.js";import{T as W}from"./Text-CijQgHlf.js";import"./IllustratedMessage-CcBppIUQ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-EPA_0_Bo.js";import"./mergeRefs-utDOSA_8.js";import"./index-DO8-cvBB.js";import"./utils-DLru3qrQ.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CjVOmJR3.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DAKRqT8J.js";import"./useFocus-_KFCgimG.js";import"./useCollator-D1vKzkof.js";import"./context-Dz2Qbbtu.js";import"./useLocalizedStringFormatter-BJgvBQQo.js";import"./Button-DVdJDgqt.js";import"./ProgressBar-DaMaURS1.js";import"./Label-CJkrjybq.js";import"./Hidden-DLVb5zGs.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-mcSHbC1W.js";import"./useFocusRing-Dt7u0yDa.js";import"./useFocusable-BXg3nN8-.js";import"./VisuallyHidden-HCxlUedB.js";import"./ContextMenuSection-Bx237WzR.js";import"./Action-_fiDaeQa.js";import"./context-DfaRjifq.js";import"./useStatic-3eGZwKWm.js";import"./browser-Df0WU9AE.js";import"./getActionGroupSlot-kdQR9GNf.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-D2aL6iTu.js";import"./RSPContexts-DvajV3uw.js";import"./OverlayArrow-DjgfcPnj.js";import"./useControlledState-Bhtz6D6k.js";import"./Collection-BWh0MO5P.js";import"./CollectionBuilder-D7rkl-fZ.js";import"./Separator-Dp29JyT-.js";import"./Group-CHBQvVuc.js";import"./SearchField-BVNSbwCA.js";import"./FieldError-DUyd9_2U.js";import"./Form-DsyloFzD.js";import"./useTextField-mqiYsdTK.js";import"./useFormReset-BMZp-ADn.js";import"./TextField-DhjdGSid.js";import"./useEvent-TvzQ57Lp.js";import"./SelectionManager-BHHDa5mG.js";import"./FocusScope-BCf9GP_l.js";import"./ColumnLayout-DtHqW70L.js";import"./Avatar-C2IZYY1M.js";import"./AlertIcon-BnbAx-wW.js";import"./Image-C3PFDZKD.js";import"./Link-DVmWaJ_j.js";import"./ButtonView-DJzXQuoF.js";import"./ContextMenuContent--hPnrxNk.js";import"./Popover-D_AUH0xc.js";import"./DialogTriggerView-C-13EtHB.js";import"./Switch-BoZ1Zjik.js";import"./Label-Cw_HB0L8.js";import"./useToggleState-DE1FGCab.js";import"./FieldError-6eoAimLP.js";import"./LoadingSpinner-Cw9GFgG6.js";import"./Heading-BoE0fvKk.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-CzquwV9M.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},M=G("submit"),a={},m={args:{isDisabled:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(R,{}),e.jsx(f,{children:"Drop image"}),e.jsx(W,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=k(),i=w();return e.jsxs(U,{form:n,onSubmit:M,children:[e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(E,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var j,S,C;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,b,y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,Z,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};var O,T,_;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(_=(T=c.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const dr=["Default","Disabled","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,p as Multiple,l as WithAcceptedTypes,c as WithReactHookForm,dr as __namedExportsOrder,cr as default};
