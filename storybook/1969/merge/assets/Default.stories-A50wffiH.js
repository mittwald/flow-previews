import{r as x,j as e}from"./iframe-DcFGg16D.js";import{F as t}from"./FileDropZone-Cz0_DssC.js";import{S as u}from"./Section-Ip9PcGMQ.js";import{F}from"./FileCardList-D4b3Qljw.js";import{F as f}from"./FileCard-Dw_WfO1q.js";import{u as E,F as W,t as G}from"./Form-BsijhcD9.js";import{B as s}from"./Button-DJ4LLcBR.js";import{A as M}from"./ActionGroup-Bmsc2TXg.js";import{_ as j,$ as q}from"./IconWarning-CHPRxwlr.js";import{H as g}from"./Heading-n_TZDmqA.js";import{F as h}from"./FileField-Bj3RG60G.js";import{T as v}from"./Text-DMVvzt3E.js";import"./IllustratedMessage-DOTCg6bD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BUogT5Xb.js";import"./mergeRefs-OVYq_ib7.js";import"./index-CDaG_HQK.js";import"./utils-MGL4-aZB.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Bo-pyWRw.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BWfTCaKH.js";import"./useFocus-U4AMFjB6.js";import"./useCollator-IqIPfKpf.js";import"./context-2JOSlQoN.js";import"./useLocalizedStringFormatter-BA09CE4K.js";import"./Button-eLaBErzq.js";import"./ProgressBar-B1oFmI6J.js";import"./Label-DA_WgLUG.js";import"./Hidden-Cmuw7QWn.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Dxku2mh7.js";import"./useFocusRing-C2kFO1mh.js";import"./useFocusable-CBHGItg9.js";import"./VisuallyHidden-MvD6uM4h.js";import"./ContextMenuSection-D_jMxJT1.js";import"./Action-BHkIIo1y.js";import"./context-DiGr7rSI.js";import"./useStatic-DiqMOEo2.js";import"./browser-CVxrqIOh.js";import"./getActionGroupSlot-CBzmOk9k.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BjymA24M.js";import"./RSPContexts-BGgHSZk2.js";import"./OverlayArrow-D67G4pFu.js";import"./useControlledState-ecFtZ1Px.js";import"./Collection-DSC_s3_U.js";import"./CollectionBuilder-C1fftWwC.js";import"./Separator-RxFnsY_N.js";import"./Group-Cfinkx-g.js";import"./SearchField-DOOJGDQj.js";import"./FieldError-Dg2s55Gd.js";import"./Form-67TyawWi.js";import"./useTextField-DnoqRTqc.js";import"./useFormReset-CHCY757v.js";import"./TextField-DxEII3el.js";import"./useEvent-Ca5y4KLG.js";import"./SelectionManager-Cc_FCoHE.js";import"./FocusScope-Csa5zz-0.js";import"./ColumnLayout-KUFWMdL_.js";import"./Avatar-t-qtsHDE.js";import"./AlertIcon-C1ZFlsX4.js";import"./Image-B1fJC69I.js";import"./Link-DQW6N6eW.js";import"./ButtonView-j4haeJiF.js";import"./ContextMenuContent-xu6qvb_W.js";import"./Popover-DNcGxoGD.js";import"./DialogTriggerView-I--QKd5T.js";import"./Switch-BcQpN0U0.js";import"./Label-DUWIrMUF.js";import"./useToggleState-TwUwQFtk.js";import"./FieldError-CkYOPuvt.js";import"./LoadingSpinner-B2KP9AW1.js";import"./Heading-B3gs3td_.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-BLYaA1Bn.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
