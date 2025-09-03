import{r as g,j as e}from"./iframe-Bi2SfRmV.js";import{F as t}from"./FileDropZone-BiZnDXds.js";import{S as d}from"./Section-Cfydu9Ov.js";import{F as u}from"./FileCardList-DcMXy19k.js";import{F}from"./FileCard-qG7SS1jy.js";import{u as k,F as U,t as w}from"./Form-B5qWMYwg.js";import{B as s}from"./Button-D5Xd0LEq.js";import{A as E}from"./ActionGroup-BuBZsTiM.js";import{_ as x,$ as R}from"./IconWarning-Bplgov_i.js";import{H as f}from"./Heading-CkWKlntd.js";import{F as h}from"./FileField-efDL6_IB.js";import{T as W}from"./Text-BBB4yGC-.js";import"./IllustratedMessage-dFusM9LO.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DaoyFYJY.js";import"./mergeRefs-DG37ux9F.js";import"./index-BPrHKF6N.js";import"./utils-Dxcmwd9a.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CkSKd-Z_.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-A5VLCzVG.js";import"./useFocus-C-Ng-ghT.js";import"./useCollator-nLcbAmPr.js";import"./context-BhsUJEB9.js";import"./useLocalizedStringFormatter-BS293wUk.js";import"./Button-D6XrWsvH.js";import"./ProgressBar-Dobb74j3.js";import"./Label-HBAOkOC5.js";import"./Hidden-B9tBmOSG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BC_RRwfM.js";import"./useFocusRing-Cut0-bC1.js";import"./useFocusable-CoivSZnS.js";import"./VisuallyHidden-DCu-7XPb.js";import"./ContextMenuSection-BwTv2FGo.js";import"./Action-C4D1p-D4.js";import"./context-BL-ZIP9s.js";import"./useStatic-DCDW6go-.js";import"./browser-B5YnOpHr.js";import"./getActionGroupSlot-CbuIGg6y.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-MyAkaQuV.js";import"./RSPContexts-SSRv2tEc.js";import"./OverlayArrow-B-xht0if.js";import"./useControlledState-CIKoypYK.js";import"./Collection-Bq_myMt6.js";import"./CollectionBuilder-DhC4o9GF.js";import"./Separator-D9zMzSnu.js";import"./Group-CNmX4nS8.js";import"./SearchField-BM55Blft.js";import"./FieldError-BIS3uJRl.js";import"./Form-B_Pu4x7F.js";import"./useTextField-CloIwySk.js";import"./useFormReset-BRME98Hv.js";import"./TextField-Cs62mBed.js";import"./useEvent-62uCNpCU.js";import"./SelectionManager-DBvQYGX_.js";import"./FocusScope-lVODcCJ_.js";import"./ColumnLayout-D5lP3O5e.js";import"./Avatar-DXF_j7Z6.js";import"./AlertIcon-0-ZnVc2E.js";import"./Image-BQsieaKt.js";import"./Link-C2A0Cdv9.js";import"./ButtonView-cgCkxm-5.js";import"./ContextMenuContent-DJeWZ3-W.js";import"./Popover-Db6Hc3ib.js";import"./DialogTriggerView-CRsA35wH.js";import"./Switch-DAjLxwbb.js";import"./Label-Bf2ieprX.js";import"./useToggleState-DGMXdDzZ.js";import"./FieldError-CmL2Tr0U.js";import"./LoadingSpinner-ClEMvWD9.js";import"./Heading-C5bxiFeF.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-B38Yfz1K.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},M=G("submit"),a={},m={args:{isDisabled:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(R,{}),e.jsx(f,{children:"Drop image"}),e.jsx(W,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=k(),i=w();return e.jsxs(U,{form:n,onSubmit:M,children:[e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(E,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var j,S,C;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,b,y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
