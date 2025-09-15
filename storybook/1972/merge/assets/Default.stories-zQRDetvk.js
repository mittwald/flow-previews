import{r as x,j as e}from"./iframe-DSkJqBaJ.js";import{F as t}from"./FileDropZone-QpikINch.js";import{S as u}from"./Section-CtOFRU4c.js";import{F}from"./FileCardList-BY5ft8rK.js";import{F as f}from"./FileCard-B_ZVb7g6.js";import{u as E,F as W,t as G}from"./Form-DL2mQqTy.js";import{B as s}from"./Button-CDKKJ9Lp.js";import{A as M}from"./ActionGroup-CWg0ZPOO.js";import{_ as j,$ as q}from"./IconWarning-CVH07XBs.js";import{H as g}from"./Heading-C3BqIrHn.js";import{F as h}from"./FileField-DVnbCdDq.js";import{T as v}from"./Text-DEYyJHCZ.js";import"./IllustratedMessage-Bx7VnY9D.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DjRPgLoo.js";import"./mergeRefs-Z8wKoPrZ.js";import"./index-CL0qA5Bh.js";import"./utils-1-N0d2c9.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BLRpFskM.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-IHONIae1.js";import"./useFocus-G_FCb5od.js";import"./useCollator-DnEaXEjZ.js";import"./context-BGjjWy4a.js";import"./useLocalizedStringFormatter-D8TjtXwl.js";import"./Button-D_WSnJ-T.js";import"./ProgressBar-CSEftjVr.js";import"./Label-C14Bap2a.js";import"./Hidden-4KMmbp7C.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D7WkZjMs.js";import"./useFocusRing-CxQcEY3i.js";import"./useFocusable-DnFOFct-.js";import"./VisuallyHidden-BCoHKLFo.js";import"./ContextMenuSection-_Bs9Wxdx.js";import"./Action-BQB4Vs5h.js";import"./context-C-BSE4mB.js";import"./useStatic-B7cHRXbC.js";import"./browser-D8d4HdJF.js";import"./getActionGroupSlot-I0QCsr-6.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DxHA7eu_.js";import"./RSPContexts-DQKO52xl.js";import"./OverlayArrow-Bs3dimZg.js";import"./useControlledState-BYdmrjiu.js";import"./Collection-DAtUHX6x.js";import"./CollectionBuilder-BxVvMuh2.js";import"./Separator-CM2q7_wH.js";import"./Group-3xm6Vzmn.js";import"./SearchField-COlgHc0W.js";import"./FieldError-VY00PX4H.js";import"./Form--wHsDFUK.js";import"./useTextField-D7V5JJBm.js";import"./useFormReset-Dcdsxz2S.js";import"./TextField-MvldIgrc.js";import"./useEvent-cDDpRPoS.js";import"./SelectionManager-B8u4m53M.js";import"./FocusScope-CsPDgYW_.js";import"./ColumnLayout-FBz6TzIk.js";import"./Avatar-D-1mjWGh.js";import"./AlertIcon-CGfyXbw6.js";import"./Image-BtHY9X7M.js";import"./Link-BHQ0bz3X.js";import"./ButtonView-C6FU7lZ-.js";import"./ContextMenuContent-CPE9dPgT.js";import"./Popover-BMgBLYYV.js";import"./DialogTriggerView-BZLzPo95.js";import"./Switch-CBt00r0q.js";import"./Label-C19pMB8k.js";import"./useToggleState-D1-WcXga.js";import"./FieldError-BRJrB4yt.js";import"./LoadingSpinner-Cpke26nP.js";import"./Heading-1Ap11lE6.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-CY4h7UZj.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
