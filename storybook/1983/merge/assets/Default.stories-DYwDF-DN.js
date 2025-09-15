import{r as x,j as e}from"./iframe-BJ0F67WV.js";import{F as t}from"./FileDropZone-9nJIg1_d.js";import{S as u}from"./Section-DYjzF64I.js";import{F}from"./FileCardList-C91tFdNR.js";import{F as f}from"./FileCard-ZZkwPIuY.js";import{u as E,F as W,t as G}from"./Form-CphuCCBx.js";import{B as s}from"./Button-CnQZL08m.js";import{A as M}from"./ActionGroup-BQ0PFHwd.js";import{$ as j,a0 as q}from"./IconWarning-D8lhACCL.js";import{H as g}from"./Heading-B9mg5LEa.js";import{F as h}from"./FileField-sn1lvkuk.js";import{T as v}from"./Text-DvcA_djt.js";import"./IllustratedMessage-Bafi4gSX.js";import"./clsx-B-dksMZM.js";import"./flowComponent-3J-YZQgx.js";import"./index-DnTgiG27.js";import"./index-C5tuckEm.js";import"./utils-CfdyWDg2.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DUTh34WN.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CE1zHuYM.js";import"./useFocus-N8Qk0gvU.js";import"./useCollator-ueFTVoBb.js";import"./context-DDk-RgEI.js";import"./useLocalizedStringFormatter-CatcJgnD.js";import"./Button-CJVv4977.js";import"./ProgressBar-BZfTjKSF.js";import"./Label-BZcf1Nsx.js";import"./Hidden-iBx55YDK.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-C0-WYOlY.js";import"./useFocusRing-CZqmVUZk.js";import"./useFocusable-k7wU8KZy.js";import"./VisuallyHidden-CST8zJDR.js";import"./ContextMenuSection-Dlp4NHpV.js";import"./Action-DQsKkgIU.js";import"./context-DqfxRtzM.js";import"./useStatic-BcjnPkg-.js";import"./browser-ENr42WFT.js";import"./getActionGroupSlot-DrYIE0ib.js";import"./dynamic-D4EbkcOt.js";import"./Dialog-CcAHYHw-.js";import"./RSPContexts-BTU5SObx.js";import"./OverlayArrow--hlAjm0f.js";import"./useControlledState-g4NJV7ij.js";import"./Collection-B8sxr2FE.js";import"./CollectionBuilder-L5ZDKpRe.js";import"./Separator-CMNt12Nc.js";import"./Group-CRkQVq-1.js";import"./SearchField-K6WJ8JUX.js";import"./FieldError-zuZgMzEa.js";import"./Form-aW46NXWl.js";import"./useTextField-DGpbu28C.js";import"./useFormReset-5M8XX6CH.js";import"./TextField-CsP4pSiS.js";import"./useEvent-BEGbzF0p.js";import"./SelectionManager-aRuCxMGp.js";import"./FocusScope-own16ieq.js";import"./ColumnLayout-BgNpm4Hv.js";import"./Avatar-C7qeyCr3.js";import"./AlertIcon-B6CXCdWd.js";import"./Image-DdPsXYk1.js";import"./Link-C1_LKXDW.js";import"./ButtonView-DHTxrZ8B.js";import"./ContextMenuContent-Bn8daWqo.js";import"./Popover-Dgu6lEcA.js";import"./DialogTriggerView-NFgxLp1f.js";import"./ControlledNotification-DPl-ua4c.js";import"./Switch-BLQJgmjy.js";import"./Label-DdDrAhKV.js";import"./useToggleState-BStMvCUs.js";import"./FieldError-B5pU0GHC.js";import"./LoadingSpinner-s7oSeT27.js";import"./Heading-BcZio6h0.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-CK3yk5uQ.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,gr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const n=E(),i=G();return e.jsxs(W,{form:n,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...n.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=m.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,I,R;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(R=(I=p.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var T,Z,_;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(_=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};var k,U,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const hr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,hr as __namedExportsOrder,gr as default};
