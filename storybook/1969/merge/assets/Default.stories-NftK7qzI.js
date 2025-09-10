import{r as x,j as e}from"./iframe-DxsUlawc.js";import{F as t}from"./FileDropZone-Ce8NYyXA.js";import{S as u}from"./Section-BWq5F8QN.js";import{F}from"./FileCardList-DHjABzAs.js";import{F as f}from"./FileCard-BSgZvtki.js";import{u as E,F as W,t as G}from"./Form-UweLUich.js";import{B as s}from"./Button-IG1UbGgX.js";import{A as M}from"./ActionGroup-DbOzWeFO.js";import{_ as j,$ as q}from"./IconWarning-CxX_lufW.js";import{H as g}from"./Heading-BOztv1gg.js";import{F as h}from"./FileField-B2fkb459.js";import{T as v}from"./Text-BghZAovJ.js";import"./IllustratedMessage-R3FKEW6u.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-xQDv9zm6.js";import"./mergeRefs-CIUzaBPj.js";import"./index-CXZ1ulCu.js";import"./utils-anS-nfaS.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-w8QkFxXB.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CBxP0DvO.js";import"./useFocus-19elgRbR.js";import"./useCollator-DS1CRBkN.js";import"./context-Pme8S34O.js";import"./useLocalizedStringFormatter-B7ecu7MW.js";import"./Button-D6Z7YYpb.js";import"./ProgressBar-litaDe0V.js";import"./Label-DR2p3ljL.js";import"./Hidden-DmCEYrWx.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CuZIkaGu.js";import"./useFocusRing-NqyRw62N.js";import"./useFocusable-Dsjl8uYb.js";import"./VisuallyHidden-DjzEMrNo.js";import"./ContextMenuSection-G4FkDWGU.js";import"./Action-Bm6Z0jHH.js";import"./context-D1Ianu5s.js";import"./useStatic-DTmVdxCi.js";import"./browser-GG2yXHGk.js";import"./getActionGroupSlot-DSGD8tPp.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BhiDy3Uj.js";import"./RSPContexts-D24GGWc4.js";import"./OverlayArrow-Cqrl2gO5.js";import"./useControlledState-BiaHUtte.js";import"./Collection-2mgYJ3lC.js";import"./CollectionBuilder-DUz18fnw.js";import"./Separator-MdtjVr6X.js";import"./Group-BM4Odlhy.js";import"./SearchField-CP40iq6L.js";import"./FieldError-BogjW8MC.js";import"./Form-DGyQGQrN.js";import"./useTextField-C34ms4nI.js";import"./useFormReset-C5585XYI.js";import"./TextField-BV-7_CBI.js";import"./useEvent-CBeKZXam.js";import"./SelectionManager-zRsSiPpC.js";import"./FocusScope-_FVys5dN.js";import"./ColumnLayout-m95azp9e.js";import"./Avatar-Dd4LRr32.js";import"./AlertIcon-8o1e_Dxx.js";import"./Image-pPjKwCaK.js";import"./Link-CztFBomh.js";import"./ButtonView-CD8jObmh.js";import"./ContextMenuContent-B-uDmENd.js";import"./Popover-BzQAY9NU.js";import"./DialogTriggerView-BqpM7c71.js";import"./Switch-BDovvq2k.js";import"./Label-B7Tx4Pgn.js";import"./useToggleState-D8_HqcG5.js";import"./FieldError-B5iG2Dx8.js";import"./LoadingSpinner-B_W_hnSA.js";import"./Heading-CLK_5_44.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-HMke4BSZ.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
