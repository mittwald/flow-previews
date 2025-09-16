import{r as x,j as e}from"./iframe-d9P-aV0W.js";import{F as t}from"./FileDropZone-DfVoAdpc.js";import{S as u}from"./Section-b7n37lj_.js";import{F}from"./FileCardList-CS1c29IW.js";import{F as f}from"./FileCard-DWwyoMXa.js";import{u as E,F as W,t as G}from"./Form-BskI9iRZ.js";import{B as s}from"./Button-B1lQe4CG.js";import{A as M}from"./ActionGroup-syZ4aIld.js";import{_ as j,$ as q}from"./IconWarning-BjZlRYlZ.js";import{H as g}from"./Heading-1328N8LH.js";import{F as h}from"./FileField-D9H0x2ud.js";import{T as v}from"./Text-Be7zee3C.js";import"./IllustratedMessage-BccTRUEQ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-COJEgxrC.js";import"./mergeRefs-COfeY-J9.js";import"./index-DNfeWXBl.js";import"./utils-D3Cd9kCb.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-D1KGOeak.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DJC774kJ.js";import"./useFocus-Db-Axcue.js";import"./useCollator-D1fE0zhK.js";import"./context-3d2O_dpD.js";import"./useLocalizedStringFormatter-BD0NOEPb.js";import"./Button-DwY3a-D1.js";import"./ProgressBar-Sdd768YE.js";import"./Label-Dkt1SH7U.js";import"./Hidden-ATL9oYS4.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CdPHlHdZ.js";import"./useFocusRing-CufwTJs4.js";import"./useFocusable-CU14CpV2.js";import"./VisuallyHidden-D6ugaIjO.js";import"./ContextMenuSection-B_Ps-rhF.js";import"./Action-DTIHrutw.js";import"./context-DNdMdfyQ.js";import"./useStatic-BCruP98g.js";import"./browser-7zjo9sS-.js";import"./getActionGroupSlot-CwmqcSpm.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-e74qD_EA.js";import"./RSPContexts-CIfamJXM.js";import"./OverlayArrow-Cjv7HVcg.js";import"./useControlledState-CiRgye4r.js";import"./Collection-CdCCPlVo.js";import"./CollectionBuilder-DsV7XKjH.js";import"./Separator-p90sXtPP.js";import"./Group-DNqxyc_c.js";import"./SearchField-CGJ3SG_G.js";import"./FieldError-DZyu-lh_.js";import"./Form-D0Rr0MG7.js";import"./useTextField-BsPcuE2q.js";import"./useFormReset-BRhy_R9s.js";import"./TextField-CBm_F67z.js";import"./useEvent-BUfOZTC1.js";import"./SelectionManager-CdLcEL5b.js";import"./FocusScope-Bqouiiv6.js";import"./ColumnLayout-DBC7w0_b.js";import"./Avatar-DoQEMUH2.js";import"./AlertIcon-DyxnpmLa.js";import"./Image-BLj5vaUH.js";import"./Link-BeeXtlZl.js";import"./ButtonView-CZuAcorV.js";import"./ContextMenuContent-DwlwlXS3.js";import"./Popover-DPVZXXeh.js";import"./DialogTriggerView-FP1ivMgD.js";import"./Switch-Cp8y0ZPL.js";import"./Label-Bkj4txtc.js";import"./useToggleState-Dn3BRejd.js";import"./FieldError-Bx3miAuV.js";import"./LoadingSpinner-BMYPjKuf.js";import"./Heading-DqhKHwH3.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-DaFZXsc7.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
