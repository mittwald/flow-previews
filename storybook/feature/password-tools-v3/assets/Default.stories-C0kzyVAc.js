import{r as h,j as e}from"./iframe-DaJUcpT8.js";import{F as t}from"./FileDropZone-WvTSBF7Z.js";import{S as c}from"./Section-DeKn8XrD.js";import{F as d}from"./FileCardList-NyyAYZF9.js";import{F as u}from"./FileCard-LRSbdFub.js";import{u as O,F as T,t as _}from"./Form-45LVoLgf.js";import{B as s}from"./Button-VCV9ziEp.js";import{A as b}from"./ActionGroup-DhNSkfTb.js";import{Y as x,Z as k}from"./IconWarning-Di7G1N2l.js";import{H as F}from"./Heading-CvGa7ST0.js";import{F as f}from"./FileField-BHYZimBw.js";import{T as U}from"./Text-onzY52Lv.js";import"./IllustratedMessage-Cvh0__KY.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-ADMZzlWa.js";import"./mergeRefs-BEqFWw_4.js";import"./index-D3N8NcCI.js";import"./utils-cm5Xkl-u.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-D1R_5zV7.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-prd9XZsG.js";import"./useFocus-BmgQs_EM.js";import"./useCollator-CWhSIfWE.js";import"./context-BvSX8hdd.js";import"./useLocalizedStringFormatter-DgJlXYZm.js";import"./Button-BRzam8Ar.js";import"./ProgressBar-Cnbrmi-n.js";import"./Label-CVkBl_Lv.js";import"./Hidden-DcO9dlXt.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CEpf8EyH.js";import"./useFocusRing-BGPs1fr9.js";import"./useFocusable-BAN9nHDM.js";import"./VisuallyHidden-DvK-wDtX.js";import"./ContextMenuSection-BK2iLm4R.js";import"./Action-3tEpttEY.js";import"./context-nDH_4RW_.js";import"./useStatic-llywhH4U.js";import"./browser-kRBy5Vjm.js";import"./getActionGroupSlot-Cdl7NAJL.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-D9LWMemg.js";import"./RSPContexts-hBgp-JuF.js";import"./OverlayArrow-CK2mB8Cb.js";import"./useControlledState-CRRDqDT-.js";import"./Collection-Wdd3SW29.js";import"./CollectionBuilder-Bz5wg4gw.js";import"./Separator-DuKCDsxL.js";import"./Group-DcjqWYxF.js";import"./SearchField-UXIbzWx2.js";import"./FieldError-CSXHy091.js";import"./Form-68wNlegC.js";import"./useTextField-D2U5Ytm3.js";import"./useFormReset-wR0NNvKg.js";import"./TextField-Usv5aNlb.js";import"./useEvent-rPQ2UWvx.js";import"./SelectionManager-WCXi6IP8.js";import"./FocusScope-DS_o-PRb.js";import"./ColumnLayout-1uYCptXZ.js";import"./Avatar-BDEmUWxE.js";import"./AlertIcon-0d0KI50x.js";import"./Image-h24ZapGE.js";import"./Link-SxlJruch.js";import"./OptionsButton-DA4nXgs_.js";import"./ButtonView-x4MVKHQc.js";import"./ContextMenuContent-DiMDR2u1.js";import"./Popover-C3BJJ-PT.js";import"./DialogTriggerView-CfzLhP0J.js";import"./Switch-DW6Npl-c.js";import"./Label-BgQXylnn.js";import"./useToggleState-BkIjbouE.js";import"./FieldError-AGeyblw8.js";import"./LoadingSpinner-8zd3RGCO.js";import"./Heading-B0zWjGO2.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-Dp6a6rFz.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
