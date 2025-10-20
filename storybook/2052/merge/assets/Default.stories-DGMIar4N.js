import{r as x,j as e}from"./iframe-BojHUq_o.js";import{F as t}from"./FileDropZone-D7XrINM1.js";import{S as u}from"./Section-DKmaai8j.js";import{F}from"./FileCardList-mHChCBlp.js";import{F as f}from"./FileCard-B8ZiCtkW.js";import{u as E,F as W,t as G}from"./Form-DiL5IjUK.js";import{B as s}from"./Button-Dx72WFTb.js";import{A as M}from"./ActionGroup-htEV1_ZT.js";import{_ as j,$ as q}from"./IconWarning-CDe5PPLT.js";import{H as g}from"./Heading-D97xV0XF.js";import{F as h}from"./FileField-DkWBWqUu.js";import{T as v}from"./Text-HCLVlkvP.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-BGFOTqfV.js";import"./clsx-B-dksMZM.js";import"./flowComponent-T2-wi8uX.js";import"./index-BJZZiC-7.js";import"./index-Byu2kyB2.js";import"./useFieldComponent-DC978Re4.js";import"./utils-Gx6YrarE.js";import"./Text-BOOhOnJG.js";import"./filterDOMProps-CghfNOdR.js";import"./react-children-utilities-M78AEMQD.js";import"./ClearPropsContext-CDRCLX7w.js";import"./intlStrings-ZMTSFH_M.js";import"./Label-kTT31z_U.js";import"./Hidden-ZJfagMAU.js";import"./useFocus-C9Jl_mjq.js";import"./useCollator-Chx17-X6.js";import"./context-BrPX2Q0J.js";import"./useLocalizedStringFormatter-69wcReOi.js";import"./Button-DcusG6ul.js";import"./ProgressBar-Ba8rhXoO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B7zZe8uM.js";import"./useFocusRing-PQu2duny.js";import"./useFocusable-BokWW085.js";import"./VisuallyHidden-BBfPbX8D.js";import"./ContextMenuSection-CjxVZXwg.js";import"./Action-BzhIxFNp.js";import"./context-awqjHi2S.js";import"./useStatic-CZJ_DwPf.js";import"./browser-DnzQTrak.js";import"./getActionGroupSlot-D49HjIN5.js";import"./dynamic-SDISKgE-.js";import"./Dialog-MdAsc9jB.js";import"./RSPContexts-4pkCpc5X.js";import"./OverlayArrow-OKVkdbLV.js";import"./useControlledState-goB9hidZ.js";import"./Collection-BfuTuT0s.js";import"./CollectionBuilder-D8Vcy0X7.js";import"./SelectionIndicator-IBXNysdl.js";import"./Separator-B6WcJaDG.js";import"./SelectionManager-DxBzATix.js";import"./useEvent-DG1kacar.js";import"./FocusScope-YAVoTg22.js";import"./ColumnLayout-B3XRKw_-.js";import"./Avatar-CEZEHdPj.js";import"./AlertIcon-UHvFzDko.js";import"./Image-Bo-4Ppq4.js";import"./Link-YRoJ2f8n.js";import"./ButtonView-CwKMTbi9.js";import"./ContextMenuTriggerView-IfdMjKvO.js";import"./ContextMenuTrigger-D2MRRkGB.js";import"./OverlayTrigger-DnKfx-Jy.js";import"./ControlledNotification-J3sNSQSC.js";import"./OverlayContextProvider-UPAUECdU.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-C6E-2u5d.js";import"./Heading-CLxBTDIO.js";import"./useFormValidation-Q_otrioy.js";import"./Input-ldVtEAcy.js";import"./useMakeFocusable-BnROjiMm.js";import"./EmulatedBoldText-B_edXnF6.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const Fr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Disabled,c as Multiple,m as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,Fr as __namedExportsOrder,ur as default};
