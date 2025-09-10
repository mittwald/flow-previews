import{r as x,j as e}from"./iframe-CRsb57af.js";import{F as t}from"./FileDropZone-DQeP-qRq.js";import{S as u}from"./Section-CKrLRysS.js";import{F}from"./FileCardList-pfjy7C48.js";import{F as f}from"./FileCard-BHvMH5cB.js";import{u as E,F as W,t as G}from"./Form-4WviLq8T.js";import{B as s}from"./Button-c2AsubDx.js";import{A as M}from"./ActionGroup-CcnHQOWv.js";import{_ as j,$ as q}from"./IconWarning-CcDYRP7s.js";import{H as g}from"./Heading-CqJETH-v.js";import{F as h}from"./FileField-Di-ER74d.js";import{T as v}from"./Text-BeV7pvCv.js";import"./IllustratedMessage-hcu0eq5h.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BR4-1agz.js";import"./mergeRefs-DplnSgkI.js";import"./index-CuZmym5e.js";import"./utils-CwotMdLX.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Dc62rOGI.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CtSNSJe6.js";import"./useFocus-DbNAjYIm.js";import"./useCollator-BqnPvmV5.js";import"./context-DoWLFUeS.js";import"./useLocalizedStringFormatter-BRTflqfT.js";import"./Button-kIpzmIw-.js";import"./ProgressBar-B7_oEUBN.js";import"./Label-ePem4EPa.js";import"./Hidden-CvrWtM-J.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DBBuz-CW.js";import"./useFocusRing-UHNYZFwC.js";import"./useFocusable-YH2tkZSf.js";import"./VisuallyHidden-zV1rhxGD.js";import"./ContextMenuSection-BD6Fmfit.js";import"./Action-CddrIjFT.js";import"./context-q8TPx0Dl.js";import"./useStatic-l_ZOo8Ze.js";import"./browser-KjD5DeSR.js";import"./getActionGroupSlot-DOvThARP.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-J7-PabLc.js";import"./RSPContexts-BEiHDPhP.js";import"./OverlayArrow-CXvzgL8W.js";import"./useControlledState-DgD7b91N.js";import"./Collection-BmFAT2ID.js";import"./CollectionBuilder-CTW40qd5.js";import"./Separator-Be5OBuwC.js";import"./Group-BRcAYOXB.js";import"./SearchField-Dc_y5Vr7.js";import"./FieldError-B33IY45p.js";import"./Form-DcCFXF0q.js";import"./useTextField-DakxfzUT.js";import"./useFormReset-Dz46-Gvc.js";import"./TextField-CrxNrIk9.js";import"./useEvent-DYe7cJIX.js";import"./SelectionManager-vl9_ChBd.js";import"./FocusScope-B2MzAavW.js";import"./ColumnLayout-DHB6t_gG.js";import"./Avatar-B8FgkuMo.js";import"./AlertIcon-DY1SmnKI.js";import"./Image-Dq42Aepk.js";import"./Link-0mQDsfoF.js";import"./ButtonView-DJxq-ZNz.js";import"./ContextMenuContent-CO8Y2mpP.js";import"./Popover-Bdy4v_RX.js";import"./DialogTriggerView-DbRMXRJO.js";import"./Switch-ByAZWNUh.js";import"./Label-sr3fNKeT.js";import"./useToggleState-CciuEIqH.js";import"./FieldError-Bqe2SFUH.js";import"./LoadingSpinner-BbraRPFj.js";import"./Heading-gDp1ohs1.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-LP_9OJ0Q.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
