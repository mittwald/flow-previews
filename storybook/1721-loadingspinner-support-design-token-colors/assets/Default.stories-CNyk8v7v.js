import{r as h,j as e}from"./iframe-ZeYQaqTq.js";import{F as t}from"./FileDropZone-o8-g6Eew.js";import{S as c}from"./Section-o3pTB1O3.js";import{F as d}from"./FileCardList-Brk0jTwP.js";import{F as u}from"./FileCard-BM5g8xZi.js";import{u as O,F as T,t as _}from"./Form-BmPd2M3r.js";import{B as s}from"./Button-CmxRhHKt.js";import{A as b}from"./ActionGroup-BJWnFRlh.js";import{Y as x,Z as k}from"./IconWarning-Mt76M62l.js";import{H as F}from"./Heading-C7zbFBvp.js";import{F as f}from"./FileField-DpXQBkC3.js";import{T as U}from"./Text-ADEYgpsM.js";import"./IllustratedMessage-CyaE1QFz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DGPQbSrl.js";import"./mergeRefs-C3tFkdTs.js";import"./index-BPBZxO2T.js";import"./utils-CZSTTIRS.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CTESEC7p.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-1QKgiZqr.js";import"./useFocus-EvOFeEzd.js";import"./useCollator-CCl5WH_E.js";import"./context-BdRPu6tD.js";import"./useLocalizedStringFormatter-DqAl4YCp.js";import"./Button-8lvA6fYu.js";import"./ProgressBar-y-6EHwAj.js";import"./Label-BCX0WWwJ.js";import"./Hidden-BCzOp-Gy.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-C2f9EIPz.js";import"./useFocusRing-D3GUo_QM.js";import"./useFocusable-_P_eC141.js";import"./VisuallyHidden-CW-y3tuT.js";import"./ContextMenuSection-CNp4xeCS.js";import"./Action-RN05S-xF.js";import"./context-D0miJpww.js";import"./useStatic-B42yuxiF.js";import"./browser-BE8-G2h8.js";import"./getActionGroupSlot-BZJ1-G1h.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CPFJ-em9.js";import"./RSPContexts-B51mpv1W.js";import"./OverlayArrow-BX3D_PZr.js";import"./useControlledState-fovAuXst.js";import"./Collection-DRioiR9B.js";import"./CollectionBuilder-_wjpVTSh.js";import"./Separator-CPoxSccm.js";import"./Input-Co1lLTdd.js";import"./SearchField-Bklbm_03.js";import"./FieldError-mFBw1lmq.js";import"./Form-MeaiSeb5.js";import"./Group-DRjYMMoj.js";import"./useTextField-D3PtH1hi.js";import"./useFormReset-DYMhoeZf.js";import"./TextField-C77kbV9Z.js";import"./SelectionManager-exFNYZLH.js";import"./useEvent-BAIrY4aR.js";import"./FocusScope-C_dTN5HC.js";import"./ColumnLayout-Cve39KBe.js";import"./Avatar-CbbPaMLw.js";import"./AlertIcon-cFb3S_SV.js";import"./Image-D5oga86H.js";import"./Link-DT0IKi69.js";import"./OptionsButton-CVb6INTF.js";import"./ButtonView-CMgwR8MX.js";import"./ContextMenuContent-bX0P6Ou4.js";import"./Popover-CkN76oe6.js";import"./DialogTriggerView-Udssk73q.js";import"./Switch-2nThVbac.js";import"./Label-DaFn2Xmv.js";import"./useToggleState-DO-qPOjb.js";import"./FieldError-DbdUr15j.js";import"./LoadingSpinner-BsYGnIlm.js";import"./Heading-xW8ZitCB.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-CNK-5iTs.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,lr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(D=a.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,Z,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};const pr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,pr as __namedExportsOrder,lr as default};
