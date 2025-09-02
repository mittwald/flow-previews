import{r as g,j as e}from"./iframe-DzdsrO80.js";import{F as t}from"./FileDropZone-OkzhetAq.js";import{S as d}from"./Section-BEJbtXxb.js";import{F as u}from"./FileCardList-xvdJobwE.js";import{F}from"./FileCard-CJh_9kuU.js";import{u as k,F as U,t as w}from"./Form-BvaKwJX7.js";import{B as s}from"./Button-DVR7cX3i.js";import{A as E}from"./ActionGroup-DOlXr0dv.js";import{Y as x,Z as R}from"./IconWarning-B3m6OsdH.js";import{H as f}from"./Heading-8JrpHVPd.js";import{F as h}from"./FileField-CA3A4btO.js";import{T as W}from"./Text-DXUL7YAG.js";import"./IllustratedMessage-B6QoX3RU.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-IX1SCoto.js";import"./mergeRefs-BURbbDf-.js";import"./index-Bdpzlu2x.js";import"./utils-CvAakX2W.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CRTGmFuV.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BtHrL8qq.js";import"./useFocus-B0VC8u8k.js";import"./useCollator-B4_CrHfJ.js";import"./context-DCkzppns.js";import"./useLocalizedStringFormatter-B09vxeO2.js";import"./Button-BCqDIvjf.js";import"./ProgressBar-LQ-fnBcd.js";import"./Label-DXfcpAFN.js";import"./Hidden-BVbf7n1G.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DskVbL7b.js";import"./useFocusRing-CBIzKb6Q.js";import"./useFocusable-COvMPAb3.js";import"./VisuallyHidden-BfQH1Q-z.js";import"./ContextMenuSection-AWtfZJeN.js";import"./Action-Ba6ZxKlY.js";import"./context-DKufrzCY.js";import"./useStatic-CzVMgagU.js";import"./browser-CWHi4dia.js";import"./getActionGroupSlot-COrah7QA.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-d3aXPnlF.js";import"./RSPContexts-DgNZ7nRI.js";import"./OverlayArrow-4JOsbCJv.js";import"./useControlledState-D4aZ1p71.js";import"./Collection-C9A_LHc0.js";import"./CollectionBuilder-CaWr36HU.js";import"./Separator-CBpgeXgJ.js";import"./Group-Cdr53w7M.js";import"./SearchField-C817Qgil.js";import"./FieldError-CeKpopQl.js";import"./Form-C696dGLt.js";import"./useTextField-BarUssyk.js";import"./useFormReset-B7pkU5Xm.js";import"./TextField-Cwc92i9-.js";import"./useEvent-DVhg_FlY.js";import"./SelectionManager-CLk07rVx.js";import"./FocusScope-DDPGgWDg.js";import"./ColumnLayout-BAFZuhkH.js";import"./Avatar-ByhkFOfH.js";import"./AlertIcon-DyDbQGNm.js";import"./Image-Drbw2Hn1.js";import"./Link-CZ0ewgj0.js";import"./ButtonView-DDzASKwg.js";import"./ContextMenuContent-CjQiyveI.js";import"./Popover-CZjnIXLF.js";import"./DialogTriggerView-BSpQgGle.js";import"./Switch-CX4XfBjM.js";import"./Label-Bm3Js6Mn.js";import"./useToggleState-OwRq_I9z.js";import"./FieldError-_YRaGmgh.js";import"./LoadingSpinner-PW_7_s64.js";import"./Heading-CPSS73-Z.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-BUyeaD_Y.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},M=G("submit"),a={},m={args:{isDisabled:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(R,{}),e.jsx(f,{children:"Drop image"}),e.jsx(W,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=k(),i=w();return e.jsxs(U,{form:n,onSubmit:M,children:[e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(E,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var j,S,C;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,b,y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
