import{r as x,j as e}from"./iframe-DTheBFqg.js";import{F as t}from"./FileDropZone-B0Wa_q55.js";import{S as u}from"./Section-BDBFYB_1.js";import{F}from"./FileCardList-C9GTqbpe.js";import{F as f}from"./FileCard-q2DOqoJs.js";import{u as E,F as W,t as G}from"./Form-Bb0OZPQ3.js";import{B as s}from"./Button-Bmq0qjWo.js";import{A as M}from"./ActionGroup-Cjs4nxWu.js";import{_ as j,$ as q}from"./IconWarning-CXTS1Zmo.js";import{H as g}from"./Heading-B00i_-bg.js";import{F as h}from"./FileField-pwWrJwYz.js";import{T as v}from"./Text-DVaBUvZL.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-BvXCuJ_F.js";import"./clsx-B-dksMZM.js";import"./flowComponent-gCUS5Qd-.js";import"./index-ulNAr9WE.js";import"./index-C24gQbls.js";import"./useFieldComponent-mBN-j8SF.js";import"./utils-CIVb4-pA.js";import"./Text-C48huDBb.js";import"./filterDOMProps-CghfNOdR.js";import"./react-children-utilities-g2QZgYrG.js";import"./ClearPropsContext-NW1-nYLP.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-DE7AINdt.js";import"./useFocus-gFMm1SVx.js";import"./useCollator-2o_2J_me.js";import"./context-BBJsvWP1.js";import"./useLocalizedStringFormatter-CvDaoHpN.js";import"./Button-B9sfb4m-.js";import"./ProgressBar-Dr6zks-A.js";import"./Label-DaxiHPCi.js";import"./Hidden-BUnkE8VR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DWQVem_V.js";import"./useFocusRing-Bw6jYcrF.js";import"./useFocusable-CIkWBa0n.js";import"./VisuallyHidden-D3PBi60E.js";import"./ContextMenuSection-DVfZqLHJ.js";import"./Action-XVrtYdEu.js";import"./context-D5Eh6Kjh.js";import"./useStatic-KScOH6sT.js";import"./browser-BqPz5wcV.js";import"./getActionGroupSlot-BTW6ZZ6S.js";import"./dynamic-DYsVCHyX.js";import"./Dialog-DwHrBIEx.js";import"./RSPContexts-DdYP_yiK.js";import"./OverlayArrow-Bio3H0xn.js";import"./useControlledState-CxM5G25q.js";import"./Collection-BJPKgIab.js";import"./CollectionBuilder-CQSVhr8L.js";import"./SelectionIndicator-CjHN0yDY.js";import"./Separator-D87Ko5QM.js";import"./SelectionManager-uhDgeTSM.js";import"./useEvent-BjpDtAMc.js";import"./FocusScope-CHz78Q3h.js";import"./ColumnLayout-B0a2sy_T.js";import"./Avatar-D39nLpxw.js";import"./AlertIcon-DdQMaMt0.js";import"./Image-DUo70NW1.js";import"./Link-KWZ2RBVk.js";import"./ButtonView-De92G280.js";import"./ContextMenuTriggerView-CGYwx10c.js";import"./ContextMenuTrigger-CGbXqcoa.js";import"./OverlayTrigger-CpKaALyE.js";import"./ControlledNotification-Bs-S7xry.js";import"./OverlayContextProvider-D45bIP_5.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-CLX8R9JK.js";import"./Heading-CTEcNSu5.js";import"./useFormValidation-Bp-At_qz.js";import"./Input-Ct0KMtbU.js";import"./useMakeFocusable-DG-Ql63t.js";import"./EmulatedBoldText-P0d28SeQ.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,Fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
          <Field name="file" rules={{
          required: "Please choose a file"
        }}>
            <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
              <IconUpload />
              <Heading>Drop file</Heading>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </FileDropZone>
          </Field>
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
