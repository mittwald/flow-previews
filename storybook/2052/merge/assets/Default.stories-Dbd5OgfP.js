import{r as x,j as e}from"./iframe-hiH37hms.js";import{F as t}from"./FileDropZone-gdeAog0J.js";import{S as u}from"./Section-B8yRiADO.js";import{F}from"./FileCardList-BojBA6m7.js";import{F as f}from"./FileCard-DedStJga.js";import{u as E,F as W,t as G}from"./Form-Dyo8yiYK.js";import{B as s}from"./Button-BrzTi3gr.js";import{A as M}from"./ActionGroup-CmCahmkF.js";import{_ as j,$ as q}from"./IconWarning-Cse0Xf0Q.js";import{H as g}from"./Heading-OoTPR-HK.js";import{F as h}from"./FileField-D-4pr6hU.js";import{T as v}from"./Text-CsOmTVyE.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-D9SXY6WN.js";import"./clsx-B-dksMZM.js";import"./flowComponent-00c8POVD.js";import"./index-CTy9APi5.js";import"./index-BJu77HCL.js";import"./utils-JHWv327y.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-UKwjxOKq.js";import"./filterDOMProps-CghfNOdR.js";import"./Label-C0jnYKOc.js";import"./Hidden-XcASwwlw.js";import"./useFocus-B9-o-MIg.js";import"./useCollator-5PyA7SnE.js";import"./context-DRH00eGt.js";import"./useLocalizedStringFormatter-BRvamSQ7.js";import"./Button-BSe0nnji.js";import"./ProgressBar-CDjSE3x2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BhsWghka.js";import"./useFocusRing-WUR2BD9e.js";import"./useFocusable-C2_7lwWJ.js";import"./VisuallyHidden-C5VBpvXq.js";import"./ContextMenuSection-Co8KQTmA.js";import"./Action-BsGu1LRs.js";import"./context-riC63IcS.js";import"./useStatic-8hqO5zoY.js";import"./browser-BuBe5AKm.js";import"./getActionGroupSlot-BVQ8sE7Q.js";import"./dynamic-BmCJXizF.js";import"./Dialog-i0N_hzHI.js";import"./RSPContexts-DTJHlpNa.js";import"./OverlayArrow-CEJUr9iX.js";import"./useControlledState-BFPCb-Qt.js";import"./Collection-BgRsBBN2.js";import"./CollectionBuilder-DEp0jGGn.js";import"./context-BuwG6neX.js";import"./Separator-DghpaL2h.js";import"./SelectionManager-CSTWFJsn.js";import"./useEvent-CS-uDTBx.js";import"./FocusScope-C5smDGs3.js";import"./ColumnLayout-BM6Rfps9.js";import"./Avatar-B7NZrSlp.js";import"./AlertIcon-I8RXIybV.js";import"./Image-Dse-Dync.js";import"./Link-CelcyI2A.js";import"./ButtonView-CzVg0FNt.js";import"./ContextMenuTriggerView-dmF6QaPx.js";import"./ContextMenuTrigger-m7GbKr55.js";import"./OverlayTrigger-BUljVaN1.js";import"./ControlledNotification-jUukWxP4.js";import"./OverlayContextProvider-BhW5Vn6y.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-DMdJqtIF.js";import"./Heading-CRf9y3R9.js";import"./FormField.module-CapR5K3V.js";import"./useFormValidation-DybUzXH7.js";import"./Input-DYBCaGaK.js";import"./useMakeFocusable-CTKbAYTu.js";import"./EmulatedBoldText-BNkr3bPM.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=l.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=m.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const dr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Disabled,c as Multiple,m as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,dr as __namedExportsOrder,cr as default};
