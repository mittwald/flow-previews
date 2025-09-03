import{r as g,j as e}from"./iframe-DT0a5lsj.js";import{F as t}from"./FileDropZone-19WIjJDn.js";import{S as d}from"./Section-C1eIi3dX.js";import{F as u}from"./FileCardList-B08aRFYf.js";import{F}from"./FileCard-CUFXH4R9.js";import{u as k,F as U,t as w}from"./Form-CDOymGpF.js";import{B as s}from"./Button-BnKE_3tA.js";import{A as E}from"./ActionGroup-BaUeucfA.js";import{_ as x,$ as R}from"./IconWarning-CP_9phWh.js";import{H as f}from"./Heading-CpWZd5Gf.js";import{F as h}from"./FileField-C-0rwAKF.js";import{T as W}from"./Text-CWVnGydc.js";import"./IllustratedMessage-BWQOSA3O.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BRdZcbMx.js";import"./mergeRefs-DYr4rTQb.js";import"./index-CAMy4aIT.js";import"./utils-BDe-fZfW.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-C8QSq9Z3.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BMvlVo7d.js";import"./useFocus-BPGD2VLY.js";import"./useCollator-Zc_ZemNk.js";import"./context-DtNWionw.js";import"./useLocalizedStringFormatter-DjQQHvIW.js";import"./Button-BNdmwyxy.js";import"./ProgressBar-ByaJujBA.js";import"./Label-RcZ5RumP.js";import"./Hidden-CjrJVhTe.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-wu8eZQGI.js";import"./useFocusRing-_XF1QxIj.js";import"./useFocusable-DyoB_hOm.js";import"./VisuallyHidden-DDMzvk-a.js";import"./ContextMenuSection-BUuRVmvO.js";import"./Action-DYEDj9x0.js";import"./context-DJTNNuyW.js";import"./useStatic-WTXFIrX_.js";import"./browser-C5BzL4Ah.js";import"./getActionGroupSlot-SZaPZq2Z.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BHWnDcSc.js";import"./RSPContexts-acmSHJ3A.js";import"./OverlayArrow-HNgDPPr3.js";import"./useControlledState-C-X9sbbL.js";import"./Collection-Dyt6IE1A.js";import"./CollectionBuilder-D0yiIIyP.js";import"./Separator-AkxPmIRq.js";import"./Group-MdCfc2bT.js";import"./SearchField-Doktui3O.js";import"./FieldError-Ccza_qSZ.js";import"./Form-BqKRbvb9.js";import"./useTextField-BB3dLsw5.js";import"./useFormReset-cUnmQGQz.js";import"./TextField-Cx5OsYq1.js";import"./useEvent-DVcRtgtL.js";import"./SelectionManager-JcMzUkMf.js";import"./FocusScope-BOmeY0Fa.js";import"./ColumnLayout-CpW9eZKX.js";import"./Avatar-C8Nx-e4H.js";import"./AlertIcon-kuNEeZ72.js";import"./Image-BfYp-a9H.js";import"./Link-DflRkJCU.js";import"./ButtonView-D02npvqd.js";import"./ContextMenuContent-DYLCERpo.js";import"./Popover-BGe9X61A.js";import"./DialogTriggerView-Db6UDAae.js";import"./Switch-CVkBMd-3.js";import"./Label-Dszv3nJ4.js";import"./useToggleState-CGQQZzdG.js";import"./FieldError-xtdcz2l6.js";import"./LoadingSpinner-8cDNCbSg.js";import"./Heading-DoScZ8Wx.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-Clo2YvSu.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},M=G("submit"),a={},m={args:{isDisabled:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(R,{}),e.jsx(f,{children:"Drop image"}),e.jsx(W,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=k(),i=w();return e.jsxs(U,{form:n,onSubmit:M,children:[e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(E,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var j,S,C;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,b,y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
