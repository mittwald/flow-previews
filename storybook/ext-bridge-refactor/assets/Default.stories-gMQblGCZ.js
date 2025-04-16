import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-n-xcLTj3.js";import{F as t}from"./FileDropZone-B7_Bsx8s.js";import{S as c}from"./Section-YW-6nUkS.js";import{F as d}from"./FileCardList-DIKl_yus.js";import{F as u}from"./FileCard-DjnGnIZG.js";import{u as b,F as I,t as T}from"./Form-DO-9hbU-.js";import{a as U}from"./index-B-lxVbXh.js";import{B as s}from"./Button-Dhpj9FRh.js";import{A as w}from"./ActionGroup-CSzbvW_E.js";import{j as x,k as W}from"./IconWarning-BT9Vk3ZR.js";import{H as F}from"./Heading-BMuol6x4.js";import{F as f}from"./FileField-CLOZDa--.js";import{T as E}from"./Text-CvWN1dQn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./IllustratedMessage-nDu4P8Mc.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-xVdmcuMS.js";import"./mergeProps-JAG8EIhT.js";import"./index-jVogklOU.js";import"./index-7o24Rkki.js";import"./utils-CHEN54dH.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DatuNbZl.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DBnsbNrv.js";import"./useFocus-XoJeJsyS.js";import"./useCollator-DYp7eA3k.js";import"./useLocalizedStringFormatter-q0ERVXX8.js";import"./Button-C9_V-Y5S.js";import"./ProgressBar-5MBhZmuX.js";import"./Label-CnZl9U2I.js";import"./Hidden-B-9naaqD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D9kiuk6J.js";import"./useFocusRing-qDa0kwlS.js";import"./useFocusable-I3Nst49W.js";import"./VisuallyHidden-DJ8AgGjM.js";import"./ContextMenuSection-B_OuJeoD.js";import"./Action-VjMgs9Db.js";import"./context-ah73-6JJ.js";import"./useStatic-bVMyw5l7.js";import"./browser-BJKb5O22.js";import"./getActionGroupSlot-huFUK6tI.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DMm5cJWQ.js";import"./RSPContexts-DXggXklQ.js";import"./OverlayArrow-pA50mchW.js";import"./Collection-CURWNON1.js";import"./CollectionBuilder-DoslnNQQ.js";import"./Separator-C0eHURoS.js";import"./useOverlayTriggerState-B1QNhm0O.js";import"./useControlledState-B6lyO5nT.js";import"./SelectionManager-C5jjfSGo.js";import"./useEvent-CaE4O6jv.js";import"./FocusScope-VprgOmaE.js";import"./ColumnLayout-C6rBwMDa.js";import"./Avatar-CwDn_JtM.js";import"./react-children-utilities-JaVK66kI.js";import"./AlertIcon-B0Qoa8Mw.js";import"./Image-Cwimt9gX.js";import"./Link-5VdmwDAw.js";import"./OptionsButton-BkYHcLee.js";import"./ButtonView-8YEWeSet.js";import"./ContextMenuContent-3QQNQ-JO.js";import"./Popover-C_vX1M9f.js";import"./OverlayTrigger-CPKfF4Tt.js";import"./Popover.module-BJC3BRN9.js";import"./DialogTriggerView-BNuGuwjN.js";import"./Switch-74Uoz9_i.js";import"./Label-DuWaARVY.js";import"./useToggleState-Ckq7rO_C.js";import"./useFormReset-DmN8pfru.js";import"./FieldError-DTHL6QGh.js";import"./FieldError-D-X35EJ8.js";import"./v4-CtRu48qb.js";import"./LoadingSpinner-V_OKVJm3.js";import"./Heading-B6IEBoPv.js";import"./FormField.module-B9AzUSUD.js";import"./useFormValidation-BxWfN6mX.js";import"./Input-CzLAkyht.js";import"./EmulatedBoldText-bRyCqTVk.js";const ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},G=U("submit"),m={},a={args:{accept:"image/png"},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(W,{}),e.jsx(F,{children:"Drop image"}),e.jsx(E,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:n=>{const o=b(),i=T();return e.jsxs(I,{form:o,onSubmit:G,children:[e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...o.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(w,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
