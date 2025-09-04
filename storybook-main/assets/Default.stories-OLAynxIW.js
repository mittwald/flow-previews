import{r as g,j as e}from"./iframe-Coh3lrZj.js";import{F as t}from"./FileDropZone-BA20ANri.js";import{S as d}from"./Section-BDCUJAoe.js";import{F as u}from"./FileCardList-qWPsGLvr.js";import{F}from"./FileCard-CIHJEyTp.js";import{u as k,F as U,t as w}from"./Form-DkJKFIVl.js";import{B as s}from"./Button-D5EdJ83A.js";import{A as E}from"./ActionGroup-CrLJ68kJ.js";import{_ as x,$ as R}from"./IconWarning-B1v1dgwn.js";import{H as f}from"./Heading-CjR_hpRo.js";import{F as h}from"./FileField-BIbYJh-2.js";import{T as W}from"./Text-CXTmOKkL.js";import"./IllustratedMessage-FMKOWLXT.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CKV7yByX.js";import"./mergeRefs-DvQtY6ho.js";import"./index-CzajoHd7.js";import"./utils-CN3w8kPq.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-C-iBrm51.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BKRPYz_q.js";import"./useFocus-DOmsUoiU.js";import"./useCollator-DMqrDDl2.js";import"./context-BpLwYJWu.js";import"./useLocalizedStringFormatter-CUiOVI_H.js";import"./Button-cLSaMy5d.js";import"./ProgressBar-CHLkYv72.js";import"./Label-YsAq_uoV.js";import"./Hidden-DOaFp58p.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BU16hmOe.js";import"./useFocusRing-Bz5xuAjx.js";import"./useFocusable-D2foM-gB.js";import"./VisuallyHidden-BFztPoj4.js";import"./ContextMenuSection-BRIEUOwp.js";import"./Action-BPx-Vljf.js";import"./context-B447f_pA.js";import"./useStatic-BT-23i_z.js";import"./browser-8tAA8o9s.js";import"./getActionGroupSlot-BtRAHx2-.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DCw7F88C.js";import"./RSPContexts-C359HXMi.js";import"./OverlayArrow-qlVhoYin.js";import"./useControlledState-C1ksr8rK.js";import"./Collection-cAnrSkK1.js";import"./CollectionBuilder-CwtIJ2gd.js";import"./Separator-CwGjgvWm.js";import"./Group-O8MFP4r0.js";import"./SearchField-BwCTywRo.js";import"./FieldError-CZajLekn.js";import"./Form-C7dJ7ChK.js";import"./useTextField-DgBLYHiF.js";import"./useFormReset-0zxdLi8h.js";import"./TextField-DmB3C__1.js";import"./useEvent-D6JeCAIh.js";import"./SelectionManager-DNWvZwOK.js";import"./FocusScope-Cb054v9_.js";import"./ColumnLayout-CCp9bR-F.js";import"./Avatar-DBKX2vlP.js";import"./AlertIcon-Bxf6BfdF.js";import"./Image-MqeP2ujQ.js";import"./Link-CQySlvwc.js";import"./ButtonView-Ct-JU0xw.js";import"./ContextMenuContent-7XmMQOhf.js";import"./Popover-Dst4RoDG.js";import"./DialogTriggerView-CMJvOO3i.js";import"./Switch-CQ2N4M5Q.js";import"./Label-K_XjE_tx.js";import"./useToggleState-C-aZxD4r.js";import"./FieldError-BUIbxk7v.js";import"./LoadingSpinner-CX_uswsf.js";import"./Heading-BemNadj6.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-CrQvx5NB.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},M=G("submit"),a={},m={args:{isDisabled:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(R,{}),e.jsx(f,{children:"Drop image"}),e.jsx(W,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=k(),i=w();return e.jsxs(U,{form:n,onSubmit:M,children:[e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(E,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var j,S,C;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,b,y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
