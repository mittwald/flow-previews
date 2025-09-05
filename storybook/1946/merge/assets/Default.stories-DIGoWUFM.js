import{r as g,j as e}from"./iframe-r9Fl_3r-.js";import{F as t}from"./FileDropZone-BWvyI_6o.js";import{S as d}from"./Section-DruVn11o.js";import{F as u}from"./FileCardList-R3M2rYGU.js";import{F}from"./FileCard-BvmbW6f_.js";import{u as k,F as U,t as w}from"./Form-DruQpksO.js";import{B as s}from"./Button-D0ktHzCI.js";import{A as E}from"./ActionGroup-BVdVFLL0.js";import{_ as x,$ as R}from"./IconWarning-BUxpotmw.js";import{H as f}from"./Heading-D97qHWnP.js";import{F as h}from"./FileField-CqTQqYnq.js";import{T as W}from"./Text-DD-b1p2M.js";import"./IllustratedMessage-BoEdlceX.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-_w1UeHmF.js";import"./mergeRefs-D6E7Ef6S.js";import"./index-CrBYWkM2.js";import"./utils-DXh-iENK.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DHfFA3io.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DoVt-K4x.js";import"./useFocus-DRS9ufOF.js";import"./useCollator-B2W9GfqU.js";import"./context-B1eqcBF6.js";import"./useLocalizedStringFormatter-BlChhJwn.js";import"./Button-4Qe77JoQ.js";import"./ProgressBar-BsRRuR7U.js";import"./Label-C3TZzzex.js";import"./Hidden-BJHVOqWC.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CjAT5thu.js";import"./useFocusRing-C_G4oYuI.js";import"./useFocusable-DI-LrkzR.js";import"./VisuallyHidden-CHwjrWyl.js";import"./ContextMenuSection-C8XhetIA.js";import"./Action-B5PNSonE.js";import"./context-D7mbIFkz.js";import"./useStatic-Dwli2ElM.js";import"./browser-tiRbxzJD.js";import"./getActionGroupSlot-DpUiS5SY.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CqKbtFhs.js";import"./RSPContexts-Bz7sSPBE.js";import"./OverlayArrow-HXzjk5ZA.js";import"./useControlledState-Bxg_NaN0.js";import"./Collection-DOWMAROO.js";import"./CollectionBuilder-CqQF4tYs.js";import"./Separator-Z9TJ6XEa.js";import"./Group-BdAgZaYl.js";import"./SearchField-DOWcWepW.js";import"./FieldError-D3xuSMMg.js";import"./Form-D9IRbY4n.js";import"./useTextField-Bg6cyBen.js";import"./useFormReset-DxbIlA0W.js";import"./TextField-BiW4cyB4.js";import"./useEvent-Dowxq_UB.js";import"./SelectionManager-BmeUKben.js";import"./FocusScope-C8ZyuACd.js";import"./ColumnLayout-B2Da09ub.js";import"./Avatar-jUIvjwJM.js";import"./AlertIcon-DaBbovAD.js";import"./Image-RFIJktNs.js";import"./Link-BlXZo4Rj.js";import"./ButtonView-C_HLIPb-.js";import"./ContextMenuContent-BpoL5GQm.js";import"./Popover-DRfqiDmT.js";import"./DialogTriggerView-C_n5cTLw.js";import"./Switch-DThWMFO_.js";import"./Label-DgY637fA.js";import"./useToggleState-Bke0wRa0.js";import"./FieldError-B_shqPON.js";import"./LoadingSpinner-zCjOjpaf.js";import"./Heading-BfSyYlEK.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-CDsZBMJH.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},M=G("submit"),a={},m={args:{isDisabled:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(R,{}),e.jsx(f,{children:"Drop image"}),e.jsx(W,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=k(),i=w();return e.jsxs(U,{form:n,onSubmit:M,children:[e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(E,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var j,S,C;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,b,y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
