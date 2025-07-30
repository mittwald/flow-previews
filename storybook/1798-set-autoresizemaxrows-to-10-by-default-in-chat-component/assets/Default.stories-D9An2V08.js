import{r as h,j as e}from"./iframe-Cs4u3jai.js";import{F as t}from"./FileDropZone-nNntFpeD.js";import{S as c}from"./Section-D85z0B10.js";import{F as d}from"./FileCardList-CV_Eg3bJ.js";import{F as u}from"./FileCard-rN-HKtie.js";import{u as O,F as T,t as _}from"./Form-Cd-S2oed.js";import{B as s}from"./Button-Djxd_lPT.js";import{A as b}from"./ActionGroup-PzeTeugG.js";import{Y as x,Z as k}from"./IconWarning-0BVBVXS4.js";import{H as F}from"./Heading-Qz_GDDrV.js";import{F as f}from"./FileField-Ca1d0_lQ.js";import{T as U}from"./Text-BBeTGXmh.js";import"./IllustratedMessage-DTYmJKL-.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DyrLVIsu.js";import"./mergeRefs-DcFlLbGV.js";import"./index-DwmW63z3.js";import"./utils-vclj1Qm2.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-B7UIaBOw.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BkGcoVJa.js";import"./useFocus-ClAUtHT6.js";import"./useCollator-BvHyoRqD.js";import"./context-BvTQ7OVQ.js";import"./useLocalizedStringFormatter-D4NA580S.js";import"./Button-x10lnAMQ.js";import"./ProgressBar-BneW9jxU.js";import"./Label-S4RmJPV5.js";import"./Hidden-CdwQ6yqP.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BSD3tvTg.js";import"./useFocusRing-BLMln0L2.js";import"./useFocusable-BN_CcrEu.js";import"./VisuallyHidden-BT36-Qvg.js";import"./ContextMenuSection-BFLvvtcx.js";import"./Action-XTvpAmRi.js";import"./context-BVRdILhz.js";import"./useStatic-qxHK3Mia.js";import"./browser-BbmE0SWg.js";import"./getActionGroupSlot-Kd7a9PPP.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-C6Y-YQl5.js";import"./RSPContexts-BOo-h-N-.js";import"./OverlayArrow-BnL8IPkJ.js";import"./useControlledState-D-JQKTrH.js";import"./Collection-Bxbbk1lS.js";import"./CollectionBuilder-DJiQAvza.js";import"./Separator-CA1KhONo.js";import"./Group-Uo6LargV.js";import"./SearchField-AfdpK6Ve.js";import"./FieldError-3wBrWCfg.js";import"./Form-D6x5jYca.js";import"./useTextField-CQf7PcN9.js";import"./useFormReset-u7ab4fFg.js";import"./TextField-Dg5MZqjY.js";import"./useEvent-Cx7qitQN.js";import"./SelectionManager-DjDhbl_H.js";import"./FocusScope-FJ_dmtXb.js";import"./ColumnLayout-Cv094ATE.js";import"./Avatar-BDVGQcYV.js";import"./AlertIcon-C8AYv5dm.js";import"./Image-8CkwZ63P.js";import"./Link-ulpkcP8K.js";import"./OptionsButton-8hXqTcTG.js";import"./ButtonView-B5GWTC7G.js";import"./ContextMenuContent-DKFdXVt4.js";import"./Popover-CdGjSG1y.js";import"./DialogTriggerView-y3QEF81s.js";import"./Switch-iMvVKvC-.js";import"./Label-B0Y8PcLC.js";import"./useToggleState-BK3hHPRQ.js";import"./FieldError-Wsj8Agfe.js";import"./LoadingSpinner-C_G5gUEJ.js";import"./Heading-Bm4Z6AbO.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-Wf0lwtn6.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
