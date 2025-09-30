import{r as x,j as e}from"./iframe-8Gn-cQAI.js";import{F as t}from"./FileDropZone-gyb5tZZf.js";import{S as u}from"./Section-D-_npJws.js";import{F}from"./FileCardList-BgBvCno9.js";import{F as f}from"./FileCard-D_LIX_vB.js";import{u as E,F as W,t as G}from"./Form-Drx3o-9i.js";import{B as s}from"./Button-BYLyJZ8T.js";import{A as M}from"./ActionGroup-DeqHAwBL.js";import{_ as j,$ as q}from"./IconWarning-D4orWaCC.js";import{H as g}from"./Heading-hkF7brSR.js";import{F as h}from"./FileField-DYL9zjRN.js";import{T as v}from"./Text-CaltWpnJ.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-BzWWJGGZ.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DkmU8bZi.js";import"./index-AzFL6bUY.js";import"./index-UEc6MpK_.js";import"./utils-GVjct8zS.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-YtT3E9ZO.js";import"./filterDOMProps-CghfNOdR.js";import"./Label-BTym8jb9.js";import"./Hidden-ClnO7J5u.js";import"./useFocus-B0X0Lu9Z.js";import"./useCollator-DlUVcb0E.js";import"./context-BNiVp3am.js";import"./useLocalizedStringFormatter-Bkj0giXD.js";import"./Button-3o-n2ltV.js";import"./ProgressBar-Cd_i9EHd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-ITUQCIPr.js";import"./useFocusRing-CitWdiPC.js";import"./useFocusable-D0eqHiUC.js";import"./VisuallyHidden-hAbnP3vK.js";import"./ContextMenuSection-BSmzwpDI.js";import"./Action-HGXjP-6z.js";import"./context-BIaltrhp.js";import"./useStatic-D4LCMNvH.js";import"./browser-BcQIid3c.js";import"./getActionGroupSlot-DshV_Wd3.js";import"./dynamic-rXbOiSCg.js";import"./Dialog-DaZvxqJC.js";import"./RSPContexts-BLLLZDxH.js";import"./OverlayArrow-t8YkI2AY.js";import"./useControlledState-CowCOuKH.js";import"./Collection-DWEguDCp.js";import"./CollectionBuilder-9Z-fAvba.js";import"./context-OwOTZ-QT.js";import"./Separator-Dm-csSJW.js";import"./SelectionManager-CsYJeMyB.js";import"./useEvent-CbQE1MrG.js";import"./FocusScope-CFCh8ZEd.js";import"./ColumnLayout-DWYRY5Co.js";import"./Avatar-CRuLO-WU.js";import"./AlertIcon-BzAZToZL.js";import"./Image-CrFQjA2r.js";import"./Link-5Km-wuq7.js";import"./ButtonView-DXgWVnz8.js";import"./ContextMenuTriggerView-DQmWqM-K.js";import"./ContextMenuTrigger-S8GIaCY5.js";import"./OverlayTrigger-8IKmdc6s.js";import"./ControlledNotification-BArGS1vp.js";import"./OverlayContextProvider-fTDl6RtS.js";import"./FieldError-C-zSllwf.js";import"./FieldError-BP_wpITZ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-DLXLBid4.js";import"./Heading-CLQt8OMj.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-CDT2yp15.js";import"./Input-D8m2LMBm.js";import"./useMakeFocusable-DzdpYT79.js";import"./EmulatedBoldText-BFjU3iq0.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
