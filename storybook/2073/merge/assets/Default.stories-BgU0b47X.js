import{r as x,j as e}from"./iframe-CTxtjXon.js";import{F as t}from"./FileDropZone-BSIkigRR.js";import{S as u}from"./Section-BY4zi19G.js";import{F}from"./FileCardList-C-NGdppx.js";import{F as f}from"./FileCard-_bBBrfRd.js";import{u as E,F as W,t as G}from"./Form-B0b-E516.js";import{B as s}from"./Button-CTR-HA58.js";import{A as M}from"./ActionGroup-CzROJviL.js";import{_ as j,$ as q}from"./IconWarning-BCagwmXL.js";import{H as g}from"./Heading-DhacWgsT.js";import{F as h}from"./FileField-Cq9O_HDC.js";import{T as v}from"./Text-DQcec0AG.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-DmSTBFaZ.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cceoz8ap.js";import"./index-BzGnAInb.js";import"./index-BCkzqzEU.js";import"./utils-Dyxd3-sq.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DVSB2R1T.js";import"./filterDOMProps-CghfNOdR.js";import"./Label-JOCFYh16.js";import"./Hidden-B6GGwvwy.js";import"./useFocus-DHjekZqL.js";import"./useCollator-W6_B_X8C.js";import"./context-OuuPOLWB.js";import"./useLocalizedStringFormatter-B51ecTCL.js";import"./Button-BdISzqDC.js";import"./ProgressBar-CwnBBaoA.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-7iMHywUA.js";import"./useFocusRing-w77Sy5gu.js";import"./useFocusable-C9nsuFPZ.js";import"./VisuallyHidden-CZsUJsM2.js";import"./ContextMenuSection-BZN_5wKO.js";import"./Action-DoHauz19.js";import"./context-C6LdJJW6.js";import"./useStatic-FLOcJlac.js";import"./browser-B97evyF-.js";import"./getActionGroupSlot-CRH0bVBh.js";import"./dynamic-BqhEVzNx.js";import"./Dialog-D2IuAywV.js";import"./RSPContexts-C8qhDI2w.js";import"./OverlayArrow-DQGSQRaj.js";import"./useControlledState-CwLLr83F.js";import"./Collection-Bj68a-ij.js";import"./CollectionBuilder-1DpsfIN0.js";import"./SelectionIndicator-DjYZoC83.js";import"./Separator-7MWrsQei.js";import"./SelectionManager-CnAC5LUd.js";import"./useEvent-VfxjGHfX.js";import"./FocusScope-BV_8rP7c.js";import"./ColumnLayout-fRq8lLCW.js";import"./Avatar-CViVbvKD.js";import"./AlertIcon-CrxYL_L2.js";import"./Image-DOwT7-bN.js";import"./Link-P7Z3jhiY.js";import"./ButtonView-CPmP11lC.js";import"./ContextMenuTriggerView-B4_i_L5M.js";import"./ContextMenuTrigger-DjbMkCjw.js";import"./OverlayTrigger-CmKz4lmd.js";import"./ControlledNotification-CROEzK4U.js";import"./OverlayContextProvider-CtgoSGMn.js";import"./FieldError-yMhB6vk6.js";import"./FieldError-DPTagllN.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-ju42Rriq.js";import"./Heading-CDy8srZ9.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-PRBMAw7o.js";import"./Input-B1qknwCX.js";import"./useMakeFocusable-CHy9hJsR.js";import"./EmulatedBoldText-Da4iAST0.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=l.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=m.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const Fr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Disabled,c as Multiple,m as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,Fr as __namedExportsOrder,ur as default};
