import{r as x,j as e}from"./iframe-Mcl-fp9_.js";import{F as t}from"./FileDropZone-Bl4xZgSl.js";import{S as u}from"./Section-DfyaeJyH.js";import{F}from"./FileCardList-Bwv7zkts.js";import{F as f}from"./FileCard-BM7d-ZvW.js";import{u as E,F as W,t as G}from"./Form-j5Ncw3Ab.js";import{B as s}from"./Button-DAKl4AvN.js";import{A as M}from"./ActionGroup-Di0DmuM-.js";import{_ as j,$ as q}from"./IconWarning-Lyb53OnO.js";import{H as g}from"./Heading-D8xlpH_x.js";import{F as h}from"./FileField-BRY_yecU.js";import{T as v}from"./Text-DEIveL77.js";import"./IllustratedMessage-Dv4rXoS3.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D0Qkc9VN.js";import"./mergeRefs-C2rjSGvQ.js";import"./index-LMMmju_F.js";import"./utils-n1fDyKZ3.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DoGyCRc9.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DPxX2fH3.js";import"./useFocus-SsmNYjih.js";import"./useCollator-BtrL4jRN.js";import"./context-BorfhQA_.js";import"./useLocalizedStringFormatter-T_IfcqNQ.js";import"./Button-B-ha5P18.js";import"./ProgressBar-B-0Imi_2.js";import"./Label-FMQv6veW.js";import"./Hidden-0mHYsG9Y.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CSmiIi-0.js";import"./useFocusRing-Dg3YPgxl.js";import"./useFocusable-CVnYh69T.js";import"./VisuallyHidden-CZ8WB-4E.js";import"./ContextMenuSection-jJLrD2Vg.js";import"./Action-C_mGnw8t.js";import"./context-UATQnsvR.js";import"./useStatic-DehluLPa.js";import"./browser-BsWVSY18.js";import"./getActionGroupSlot-DpUkVKXY.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-Dbuy5IKg.js";import"./RSPContexts-D5Q6Wlej.js";import"./OverlayArrow-BjKZColU.js";import"./useControlledState-ECxCAN2t.js";import"./Collection-JtFNZJGn.js";import"./CollectionBuilder-B60nQQtd.js";import"./Separator-BOJM7lM-.js";import"./Group-IKUML2BV.js";import"./SearchField-CkC64XB4.js";import"./FieldError-BKKPCq9e.js";import"./Form-W-5ctzVT.js";import"./useTextField-DMad38Mh.js";import"./useFormReset-2GD2k0-b.js";import"./TextField-Cz-aJsxu.js";import"./useEvent-C1BmSmac.js";import"./SelectionManager-BByY8zyt.js";import"./FocusScope-D7ZuSfg7.js";import"./ColumnLayout-euv2zwaE.js";import"./Avatar-BmRdKASG.js";import"./AlertIcon-D_6BAvkZ.js";import"./Image-BLHzjilP.js";import"./Link-C_b4hIEx.js";import"./ButtonView-BdjHJ8X7.js";import"./ContextMenuContent-BKAALIDh.js";import"./Popover-BWEYPO_l.js";import"./DialogTriggerView-4ZuKOHwK.js";import"./Switch-Gfej1iPg.js";import"./Label-DVdBQme9.js";import"./useToggleState-IS42vMnF.js";import"./FieldError-B7M3u5Ws.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-COEYl7Pk.js";import"./Heading-D7y61Lsk.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-yaK_s2Yh.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,gr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const n=E(),i=G();return e.jsxs(W,{form:n,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...n.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const hr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,hr as __namedExportsOrder,gr as default};
