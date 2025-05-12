import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-F2Fta7eo.js";import{F as t}from"./FileDropZone-BgS9CumO.js";import{S as c}from"./Section-C-ZC57DR.js";import{F as d}from"./FileCardList-1rc7M1qR.js";import{F as u}from"./FileCard-CWUFJ-Nb.js";import{u as b,F as I,t as T}from"./Form-DShYMyrk.js";import{a as U}from"./index-B-lxVbXh.js";import{B as s}from"./Button-FYdEfAPS.js";import{A as w}from"./ActionGroup-C0UIXB8Y.js";import{j as x,k as W}from"./IconWarning-BXNHVn6I.js";import{H as F}from"./Heading-GeYjpnxL.js";import{F as f}from"./FileField-SWSXeVap.js";import{T as E}from"./Text-CSTNT9NW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./IllustratedMessage-8_rljqYj.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-dnCHcaDZ.js";import"./mergeRefs-12BfVTtv.js";import"./index-GHXRqlzO.js";import"./index-FKzx4Va7.js";import"./utils-DsSK6wng.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-D85TVzOv.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DB0A2tZF.js";import"./useFocus-CPhYqd-d.js";import"./useCollator-4BrhQKp8.js";import"./useLocalizedStringFormatter-QhihLYa3.js";import"./Button-xWdcV2_p.js";import"./ProgressBar-C0yX1I0t.js";import"./Label-DhTxnYZq.js";import"./Hidden-aaDrlwOM.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-heCNvahi.js";import"./useFocusRing-4oM8aI2c.js";import"./useFocusable-S4fA3fDW.js";import"./VisuallyHidden-LoYkyM-T.js";import"./ContextMenuSection-CrpLscK9.js";import"./Action-BLwy8x-7.js";import"./context-B4icoHkB.js";import"./useStatic-DZIU6iu_.js";import"./browser-BJKb5O22.js";import"./getActionGroupSlot-DgOV_5yI.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-Btg-CSVS.js";import"./RSPContexts-DhZDYkwS.js";import"./OverlayArrow-DrRmwQ1y.js";import"./Collection-CXg7zLcg.js";import"./CollectionBuilder-YMr182AN.js";import"./Separator-9Mo8yYmd.js";import"./useOverlayTriggerState-DOVnl7Ya.js";import"./useControlledState-15AFXVxl.js";import"./SelectionManager-1l7b-eWb.js";import"./useEvent-BL4Dc6Ef.js";import"./FocusScope-BlLq5c4F.js";import"./ColumnLayout-BlZBMg8V.js";import"./Avatar-D65q8Rz2.js";import"./react-children-utilities-OrI0BXp-.js";import"./AlertIcon-CWGV6WGq.js";import"./Image-B3lEEORk.js";import"./Link-svC3OXGo.js";import"./OptionsButton-gpzBKFAB.js";import"./ButtonView-HQlQ0pQD.js";import"./ContextMenuContent-DRNbICnF.js";import"./Popover-DRl0fYFJ.js";import"./OverlayTrigger-DIljMj1o.js";import"./Popover.module-BJC3BRN9.js";import"./DialogTriggerView-BKm6wmXC.js";import"./Switch-BjMCes_Q.js";import"./Label-RNQn_NAE.js";import"./useToggleState-EOIY2_D7.js";import"./useFormReset-hDk0Ijlo.js";import"./FieldError-vV6cTwrc.js";import"./FieldError-BaSwT8L9.js";import"./v4-CtRu48qb.js";import"./LoadingSpinner-FjZNoaNQ.js";import"./Heading-ASQfGrEK.js";import"./FormField.module-B9AzUSUD.js";import"./useFormValidation-Cx3HAYEY.js";import"./Input-U0jm-HC5.js";import"./EmulatedBoldText-DovK0xj5.js";const ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},G=U("submit"),m={},a={args:{accept:"image/png"},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(W,{}),e.jsx(F,{children:"Drop image"}),e.jsx(E,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:n=>{const o=b(),i=T();return e.jsxs(I,{form:o,onSubmit:G,children:[e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...o.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(w,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(D=a.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,H,L;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(L=(H=l.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var k,A,Z;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(Z=(A=p.parameters)==null?void 0:A.docs)==null?void 0:Z.source}}};const Fr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,Fr as __namedExportsOrder,ur as default};
