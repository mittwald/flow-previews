import{r as x,j as e}from"./iframe-FESji9AM.js";import{F as t}from"./FileDropZone-CRa2CYia.js";import{S as u}from"./Section-BpWwEjxG.js";import{F}from"./FileCardList-DZJatfad.js";import{F as f}from"./FileCard-DAKthjV7.js";import{u as E,F as W,t as G}from"./Form-_7yjhTRr.js";import{B as s}from"./Button-BAxmgeRc.js";import{A as M}from"./ActionGroup-BwhCzZFA.js";import{_ as j,$ as q}from"./IconWarning-BN848dMt.js";import{H as g}from"./Heading-BU3RGcV8.js";import{F as h}from"./FileField-DleE_yS9.js";import{T as v}from"./Text-BCUZ6o5_.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-BYWhwY3G.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DFQAJ_2B.js";import"./index-BqyXU5kt.js";import"./index-ChCUOHR4.js";import"./utils-C8mGBIgx.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CpJktiaj.js";import"./filterDOMProps-CghfNOdR.js";import"./Label-DTEJhL1C.js";import"./Hidden-EsiqW7jM.js";import"./useFocus-Bhqj5rOY.js";import"./useCollator-B71GfqqY.js";import"./context-ChjkYhaK.js";import"./useLocalizedStringFormatter-CqB2I62z.js";import"./Button-BW1fAfFv.js";import"./ProgressBar-BtYyhcda.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CLpB9Wju.js";import"./useFocusRing-zSoWzuoi.js";import"./useFocusable-C4O-U4lE.js";import"./VisuallyHidden-CxIvQbp6.js";import"./ContextMenuSection-B7y0wjj1.js";import"./Action-CrJdyVja.js";import"./context-igvBEEcT.js";import"./useStatic-JqJXV1dT.js";import"./browser-CzqLgnVu.js";import"./getActionGroupSlot-yK4DsrgL.js";import"./dynamic-CUTbtcza.js";import"./Dialog-CXSXfPFc.js";import"./RSPContexts-DiZSnWK-.js";import"./OverlayArrow-8xtTBq8b.js";import"./useControlledState-GWuXrIJ_.js";import"./Collection-5dsgZq8H.js";import"./CollectionBuilder-CIsMqzLE.js";import"./context-BElELkmV.js";import"./Separator-C3QdnVt7.js";import"./SelectionManager-CZcnEcDm.js";import"./useEvent-CA4CrZH2.js";import"./FocusScope-DVksIqcF.js";import"./ColumnLayout-CeDSRufi.js";import"./Avatar-DKYtMob5.js";import"./AlertIcon-Cf3ZGs7y.js";import"./Image-DuYimMe-.js";import"./Link-iiRu8NM4.js";import"./ButtonView-DHxudGRi.js";import"./ContextMenuTriggerView-Uk8-3KQe.js";import"./ContextMenuTrigger-sHbJF-bE.js";import"./OverlayTrigger-BuHoV7ty.js";import"./ControlledNotification-_DemG6tF.js";import"./OverlayContextProvider-W9DcC5Hl.js";import"./FieldError-zF1s5-sf.js";import"./FieldError-DlYIOKPN.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-BczKcQ8x.js";import"./Heading-aIRtuq7k.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-B9n8pxvz.js";import"./Input-BlcEEaiS.js";import"./useMakeFocusable-BMtXa_-B.js";import"./EmulatedBoldText-DW2sem56.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
