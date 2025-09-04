import{r as g,j as e}from"./iframe-CmZc2bqi.js";import{F as t}from"./FileDropZone-BnYhOWiw.js";import{S as d}from"./Section-6_-KD2np.js";import{F as u}from"./FileCardList-BuUDpPGh.js";import{F}from"./FileCard-DXVfLnbx.js";import{u as k,F as U,t as w}from"./Form-CUc5wgEI.js";import{B as s}from"./Button-VEnTPgt_.js";import{A as E}from"./ActionGroup-BdAU1wMW.js";import{_ as x,$ as R}from"./IconWarning-B3Gp2u9T.js";import{H as f}from"./Heading-jBmmk78O.js";import{F as h}from"./FileField-imjnMPFA.js";import{T as W}from"./Text-COKPMQN9.js";import"./IllustratedMessage-DjZ9wVqg.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Dzg9xpLh.js";import"./mergeRefs-rrkuZ5lZ.js";import"./index-EhdKi2rO.js";import"./utils-fQLXfhJQ.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Bx1XUj_S.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CtvvIYui.js";import"./useFocus-DY4K5Od-.js";import"./useCollator-auH5hY6V.js";import"./context-Cw7k38tl.js";import"./useLocalizedStringFormatter-DzGub7xE.js";import"./Button-CwlwACKZ.js";import"./ProgressBar-CSln1win.js";import"./Label-CpNDP5E5.js";import"./Hidden-BSO18HGs.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DHN_pdfM.js";import"./useFocusRing-sPcGsq2F.js";import"./useFocusable-D9qZqDJ-.js";import"./VisuallyHidden-BIaD2K_8.js";import"./ContextMenuSection-DbG-yGQ4.js";import"./Action-BaBKTXIj.js";import"./context-BhzXq7hi.js";import"./useStatic-UpaM-E4a.js";import"./browser-Cqy7wjuz.js";import"./getActionGroupSlot-D29IUdc4.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-C8j6vy7m.js";import"./RSPContexts-BZzxK-gf.js";import"./OverlayArrow-DglMoI2B.js";import"./useControlledState-CRvbu7Hz.js";import"./Collection-DjdIGVi0.js";import"./CollectionBuilder-CnF6WRcM.js";import"./Separator-7rE_vwQ_.js";import"./Group-BrnlYKy2.js";import"./SearchField-CHmOEpRX.js";import"./FieldError-CDojZsJo.js";import"./Form-DSe96I0y.js";import"./useTextField-yJLMliYt.js";import"./useFormReset-sUUVL5Mg.js";import"./TextField-B6Lvx4B_.js";import"./useEvent-Bt3Pdp32.js";import"./SelectionManager-Bx2-6Dwl.js";import"./FocusScope-CVBsChQR.js";import"./ColumnLayout-tWrYVKP8.js";import"./Avatar-CZPZwotV.js";import"./AlertIcon-CFfJOhAm.js";import"./Image-vC8HSiy8.js";import"./Link-DzALUBni.js";import"./ButtonView-BuzvrWl8.js";import"./ContextMenuContent-BTAM5tWl.js";import"./Popover-Brwgt09W.js";import"./DialogTriggerView-Devfp8nk.js";import"./Switch-XzNhnCSk.js";import"./Label-BwVK-4Jy.js";import"./useToggleState-DxcUUV8_.js";import"./FieldError-Gbiq2Jvf.js";import"./LoadingSpinner-CdGxMhIP.js";import"./Heading-UoTH87If.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-B0pwgNBL.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},M=G("submit"),a={},m={args:{isDisabled:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(R,{}),e.jsx(f,{children:"Drop image"}),e.jsx(W,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=k(),i=w();return e.jsxs(U,{form:n,onSubmit:M,children:[e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(E,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var j,S,C;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,b,y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(_=p.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var O,T,Z;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(Z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:Z.source}}};const dr=["Default","Disabled","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,p as Multiple,l as WithAcceptedTypes,c as WithReactHookForm,dr as __namedExportsOrder,cr as default};
