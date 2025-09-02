import{r as g,j as e}from"./iframe-yblUafAy.js";import{F as t}from"./FileDropZone-wWgodjOp.js";import{S as d}from"./Section-D8U5_8uv.js";import{F as u}from"./FileCardList-BUGg9PrS.js";import{F}from"./FileCard-CGodgmOM.js";import{u as k,F as U,t as w}from"./Form-DBrbqSjb.js";import{B as s}from"./Button-D2p8-L8R.js";import{A as E}from"./ActionGroup-D-wwL19h.js";import{Y as x,Z as R}from"./IconWarning-FTunGjDP.js";import{H as f}from"./Heading-DXeuEdn1.js";import{F as h}from"./FileField-DAP48gSn.js";import{T as W}from"./Text-Bue8FNqz.js";import"./IllustratedMessage-CtUAo6V8.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B8EIY1Jj.js";import"./mergeRefs-DPuRbqjH.js";import"./index-DA6b7LJX.js";import"./utils-Cuf_iXmO.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DWcsfeqF.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DopEiXYz.js";import"./useFocus-BRMNIepO.js";import"./useCollator-CBzKX_g0.js";import"./context-DmpjBdtt.js";import"./useLocalizedStringFormatter-DLiSbhJn.js";import"./Button-Zp10QsFY.js";import"./ProgressBar-p6bTWqPO.js";import"./Label-g9pCZyAY.js";import"./Hidden-C5uXlRoq.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-io38-WAj.js";import"./useFocusRing-BEFChVB0.js";import"./useFocusable-BbfkEIfW.js";import"./VisuallyHidden-iXpVyW0k.js";import"./ContextMenuSection-qwJzOA0R.js";import"./Action-kq5ASvWE.js";import"./context-BkC5jRlB.js";import"./useStatic-73QSveBS.js";import"./browser-B_6hcHr6.js";import"./getActionGroupSlot-C5sNvxIx.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DycU1Q-J.js";import"./RSPContexts-D2F1j_VZ.js";import"./OverlayArrow-Dvm2kmG0.js";import"./useControlledState-DwQ-hYmo.js";import"./Collection-CsnkEDh_.js";import"./CollectionBuilder-Bu8NYt0R.js";import"./Separator-DEwk_MDL.js";import"./Group-kAvMkrn8.js";import"./SearchField-cM2IEerl.js";import"./FieldError-Ct0jDKO_.js";import"./Form-DT2Igymc.js";import"./useTextField-ByVXoEs-.js";import"./useFormReset-BYGEl6Av.js";import"./TextField-BJiBvQru.js";import"./useEvent-C69ifmQP.js";import"./SelectionManager-B7efpdFx.js";import"./FocusScope-Cc14swpk.js";import"./ColumnLayout-D7nALvic.js";import"./Avatar-Cm4mAEgr.js";import"./AlertIcon-EVvVnOif.js";import"./Image-Dq1UikDy.js";import"./Link-CPuEUI8f.js";import"./ButtonView-11hgNZdb.js";import"./ContextMenuContent-BV-i5pSj.js";import"./Popover-BTOGgCa7.js";import"./DialogTriggerView-ChCW7gG4.js";import"./Switch-BiGragFd.js";import"./Label-8SxsrgrD.js";import"./useToggleState-B2xZ-9_K.js";import"./FieldError-CztPiJpG.js";import"./LoadingSpinner-Y4JEbMCH.js";import"./Heading-CCkmSZ_4.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-FggCtMpU.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},M=G("submit"),a={},m={args:{isDisabled:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(R,{}),e.jsx(f,{children:"Drop image"}),e.jsx(W,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=k(),i=w();return e.jsxs(U,{form:n,onSubmit:M,children:[e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(E,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var j,S,C;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,b,y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
