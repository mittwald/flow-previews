import{r as h,j as e}from"./iframe-D6sRUaJR.js";import{F as t}from"./FileDropZone-8yPdCuWW.js";import{S as c}from"./Section-BIemj20a.js";import{F as d}from"./FileCardList-CKdiGoh8.js";import{F as u}from"./FileCard-CDG_cjXe.js";import{u as O,F as T,t as _}from"./Form-CjKEb3B2.js";import{B as s}from"./Button-BCWx4ySg.js";import{A as b}from"./ActionGroup-Dd5f-Z6K.js";import{Y as x,Z as k}from"./IconWarning-D8wqW4GU.js";import{H as F}from"./Heading-VHTO0fC-.js";import{F as f}from"./FileField-DxkNTC3w.js";import{T as U}from"./Text-CzI-SNLy.js";import"./IllustratedMessage-kFvCWHMH.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C-uwmcWe.js";import"./mergeRefs-BZVZ0dhZ.js";import"./index-BUpOoE4F.js";import"./utils-Qm7xLU3y.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-C9PfWAJQ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BTkVtPxw.js";import"./useFocus-CTtv6tdW.js";import"./useCollator-DXk_KV0D.js";import"./context-DolFftfM.js";import"./useLocalizedStringFormatter-6HxLbkJZ.js";import"./Button-Bca1GoSv.js";import"./ProgressBar-Bwt4IvIC.js";import"./Label-CQsKsXsC.js";import"./Hidden-DCXhQTtV.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-uE3muS2D.js";import"./useFocusRing-eR86HLCW.js";import"./useFocusable-BOGY22Am.js";import"./VisuallyHidden-VL3LzDcs.js";import"./ContextMenuSection-zU-8WIXY.js";import"./Action-C3Ui2vCc.js";import"./context-CqKUxs9o.js";import"./useStatic-D2ZqCWbX.js";import"./browser-lItX59Of.js";import"./getActionGroupSlot-CM5KPANG.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DZPDGKPA.js";import"./RSPContexts-BRIM2Iem.js";import"./OverlayArrow-Dkw6_o-u.js";import"./useControlledState-D69o91XC.js";import"./Collection-DXulOg_H.js";import"./CollectionBuilder-Qk8YBnFP.js";import"./Separator-DEM_icnQ.js";import"./Group-Bshd2yUf.js";import"./SearchField-Di5tRiho.js";import"./FieldError-SaPVkD34.js";import"./Form-Cgvv5odv.js";import"./useTextField-Dr42bSM8.js";import"./useFormReset-DcxoBJFg.js";import"./TextField-Bj0PDkEJ.js";import"./useEvent-BymtUDWP.js";import"./SelectionManager-D0QYa18J.js";import"./FocusScope-B2gr6wNX.js";import"./ColumnLayout-C_uDVxe0.js";import"./Avatar-D5yimPxg.js";import"./AlertIcon-WpaWTRER.js";import"./Image-CY4eU1jy.js";import"./Link-B8GPZDZE.js";import"./OptionsButton-DSVzB4Lz.js";import"./ButtonView-BMJx3wcW.js";import"./ContextMenuContent-Ddk_zXgo.js";import"./Popover-Cvi4ougU.js";import"./DialogTriggerView-D_IG8I3W.js";import"./Switch-C-9eAJDi.js";import"./Label-DQJ-81B_.js";import"./useToggleState-BuHonolA.js";import"./FieldError-1_TiWSqX.js";import"./LoadingSpinner-m9O8-gUX.js";import"./Heading-C1baIQPk.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-_TSizv1d.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};const lr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,lr as __namedExportsOrder,ar as default};
