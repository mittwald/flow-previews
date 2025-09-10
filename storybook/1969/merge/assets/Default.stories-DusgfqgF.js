import{r as x,j as e}from"./iframe-DE1y3h6K.js";import{F as t}from"./FileDropZone-C9EacIXG.js";import{S as u}from"./Section-DnJXdeIl.js";import{F}from"./FileCardList-Bwor_lQv.js";import{F as f}from"./FileCard-pH5sJodQ.js";import{u as E,F as W,t as G}from"./Form-DL6pgiec.js";import{B as s}from"./Button-BA8n91r_.js";import{A as M}from"./ActionGroup-CfP2gv-p.js";import{_ as j,$ as q}from"./IconWarning-DpK9giyz.js";import{H as g}from"./Heading-xbSxOyJx.js";import{F as h}from"./FileField-CgnpIf8o.js";import{T as v}from"./Text-pSa9QdzY.js";import"./IllustratedMessage-DOs_NozV.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BpZWWW7m.js";import"./mergeRefs-D0m4vR-q.js";import"./index-jyJWLiYa.js";import"./utils-BuwGAin4.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BKZgNBXV.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CHbXUtSy.js";import"./useFocus-CKbJThq3.js";import"./useCollator-BUMRQKLH.js";import"./context-Bl9QONje.js";import"./useLocalizedStringFormatter-CrSxeSmc.js";import"./Button-B7wfEB9A.js";import"./ProgressBar-csi_2Tv3.js";import"./Label-TbKyKJmZ.js";import"./Hidden-C76LoNo0.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-W2Z88hDR.js";import"./useFocusRing-BkyGtUZS.js";import"./useFocusable-BnAo6gfc.js";import"./VisuallyHidden-BAMDsQjq.js";import"./ContextMenuSection-D1uTl_fe.js";import"./Action-COIyfA7V.js";import"./context-BCgJ5YhY.js";import"./useStatic-DRwOE5Oc.js";import"./browser-Ts-qWG1Z.js";import"./getActionGroupSlot-CWsUflea.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CprkWIxR.js";import"./RSPContexts-CDFoiued.js";import"./OverlayArrow-DXOomu3A.js";import"./useControlledState-BK9gxWse.js";import"./Collection-D0DOys5j.js";import"./CollectionBuilder-CoWtYmY0.js";import"./Separator-CBnMPT0A.js";import"./Group-BoarCDIk.js";import"./SearchField-Vb_1m6nE.js";import"./FieldError-DorlsVNp.js";import"./Form-BpLNV-sf.js";import"./useTextField-CCT8yJoF.js";import"./useFormReset-CxooHmiE.js";import"./TextField-0H-e0Syb.js";import"./useEvent-B3QERrau.js";import"./SelectionManager-s_1JWMgA.js";import"./FocusScope-Ch4ZrNXF.js";import"./ColumnLayout-C2oDMUme.js";import"./Avatar-B0Zc-qe6.js";import"./AlertIcon-BmLqchiI.js";import"./Image-DK1ZoEc_.js";import"./Link-DghxtxnE.js";import"./ButtonView-CVB_SxFp.js";import"./ContextMenuContent-Dl_BBYYU.js";import"./Popover-CrXxuisD.js";import"./DialogTriggerView-BP8fNzKl.js";import"./Switch-D2CWduSy.js";import"./Label-DZ4SmxIN.js";import"./useToggleState-BH6y_yxy.js";import"./FieldError-BK11cMw9.js";import"./LoadingSpinner-rp2WIybp.js";import"./Heading-drBmrR5i.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-1IxUiC0B.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
