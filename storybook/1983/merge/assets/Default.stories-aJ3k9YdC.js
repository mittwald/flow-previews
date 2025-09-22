import{r as x,j as e}from"./iframe-CTVhNlXB.js";import{F as t}from"./FileDropZone-CyloV1Oh.js";import{S as u}from"./Section-SPLzJ3i7.js";import{F}from"./FileCardList-CD1qnicU.js";import{F as f}from"./FileCard-D_2ab8oo.js";import{u as E,F as W,t as G}from"./Form-DtVe-xPb.js";import{B as s}from"./Button-dCi6y-L9.js";import{A as M}from"./ActionGroup-BGTAJyi6.js";import{_ as j,$ as q}from"./IconWarning-DczNnEus.js";import{H as g}from"./Heading-0AC12sSW.js";import{F as h}from"./FileField-D1Glk008.js";import{T as v}from"./Text-BLo0dekR.js";import"./IllustratedMessage-qff6vp9E.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BdKgywzy.js";import"./mergeRefs-HXCFtCCZ.js";import"./index-B0CJcMgs.js";import"./utils-DolbARJ8.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Mnh5Jpbt.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cu4D06kD.js";import"./useFocus-B_Alw_Kd.js";import"./useCollator-CEh5JEF4.js";import"./context-OLvSZRNo.js";import"./useLocalizedStringFormatter-BRqbPR-6.js";import"./Button-D-RdbR2Z.js";import"./ProgressBar-CFHcvSgt.js";import"./Label-BzU31htm.js";import"./Hidden-CCSOhlCd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-By95yFbD.js";import"./useFocusRing-BklgwE0b.js";import"./useFocusable-DI6rxpio.js";import"./VisuallyHidden-oOW_UkZ8.js";import"./ContextMenuSection-BskBABq7.js";import"./Action-Du5VgD8q.js";import"./context-C7a-dRgh.js";import"./useStatic-DGBPTsqJ.js";import"./browser-DlHr08AR.js";import"./getActionGroupSlot-W2GZrEk6.js";import"./dynamic-DKLrnrux.js";import"./Popover-CVq2IpQ_.js";import"./DialogTriggerView-Bcwx9J50.js";import"./RSPContexts-dwc2BRmP.js";import"./ClearPropsContextView-mfz5hcjJ.js";import"./useControlledState-L5KsJeFF.js";import"./FocusScope-DSxBaVHz.js";import"./Collection-DZ2C53It.js";import"./CollectionBuilder-CiesGU-z.js";import"./Separator-BvYvyYPM.js";import"./Group-BvpcRFuc.js";import"./SearchField-BNsFe36r.js";import"./FieldError-Db2L6cd5.js";import"./Form-BPrp3nIT.js";import"./useTextField-S5PdSn0a.js";import"./useFormReset-E2HVy4kF.js";import"./TextField-CCmvbP69.js";import"./useEvent-Th5L4n2g.js";import"./SelectionManager-e7sW0Ylz.js";import"./Switch-BpyON7pt.js";import"./Label-BH61eOAw.js";import"./useToggleState-BBZtxwEi.js";import"./ColumnLayout-BiEejQvJ.js";import"./Avatar-BP-BSMxh.js";import"./AlertIcon-Cgenn7OM.js";import"./Image-HWGs0Qrp.js";import"./Link-CqLA0dqy.js";import"./ButtonView-DCkfARYl.js";import"./ContextMenuTriggerView-QrvhNv9W.js";import"./FieldError-CUzLiqhG.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-DJM9ERHN.js";import"./Heading-BJNMdoAY.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-YiQdYmo2.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=m.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const gr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,gr as __namedExportsOrder,fr as default};
