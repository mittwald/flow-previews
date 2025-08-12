import{j as e,r as f}from"./iframe-BpEavT04.js";import{L as i}from"./Label-CiJybHgW.js";import{F as o}from"./FileField-BXCMxqiy.js";import{B as t}from"./Button-CCZgVc0N.js";import{S as d}from"./Section-Cen1jqO9.js";import{F as h}from"./FieldError-DY8OUBEl.js";import{F as x}from"./FieldDescription-Vq0coIIu.js";import{D as S,_ as j}from"./IconWarning-vA6HsYJq.js";import{u as b,F as B,t as v}from"./Form-CXoJvbIg.js";import{A as y}from"./ActionGroup-oawpU2v7.js";import"./index-k6QiPQ3a.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-REkcYbgF.js";import"./mergeRefs-BC_BuoXn.js";import"./index-D2hwKXUM.js";import"./useLocalizedStringFormatter-DJSuZDt4.js";import"./context-1jMNVxHt.js";import"./Label-DpfcozJA.js";import"./utils-CpHgE-S6.js";import"./Hidden-ZJTH-wDD.js";import"./FormField.module-B9AzUSUD.js";import"./Form-DJ2svD4f.js";import"./useFocus-BaJLfW1J.js";import"./useLabel-6-vYiz3X.js";import"./FieldError-BmEWAGf_.js";import"./Text-DWLjOUr2.js";import"./filterDOMProps-i7L6S0l1.js";import"./Group-DG2VW6yX.js";import"./useFocusRing-DmvqpG-I.js";import"./browser-DDZLlA7g.js";import"./Text-CcXeyI30.js";import"./EmulatedBoldText-CG9Doyve.js";import"./LoadingSpinner-CRDc6voB.js";import"./Button-CEEqH0ki.js";import"./ProgressBar-Bg2NAwr4.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DGfPwR5g.js";import"./useFocusable-C6ZTHalD.js";import"./ContextMenuSection-CNQcPdTQ.js";import"./Action-h-c20zp_.js";import"./context-DfZyAinb.js";import"./useStatic-BZhl3rWC.js";import"./getActionGroupSlot-B7TFfcap.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DAXkTNx8.js";import"./RSPContexts-z3euxKCR.js";import"./OverlayArrow-CMORky_-.js";import"./useControlledState-Cjeeyz03.js";import"./Collection-ScrsRFZc.js";import"./CollectionBuilder-DQGAitfS.js";import"./Separator-VTYWgg2d.js";import"./SearchField-DiZ_IivY.js";import"./useTextField-DUt04o8w.js";import"./useFormReset-CovQJR7M.js";import"./TextField-CoVUwaSO.js";import"./useEvent--O7DxxGG.js";import"./SelectionManager-BpD0kl0T.js";import"./useCollator-bTe8AndB.js";import"./FocusScope-CJ6Nm8ct.js";import"./VisuallyHidden-DD5pbayJ.js";const{action:C}=__STORYBOOK_MODULE_ACTIONS__,Oe={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(i,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},L=C("submit"),n={},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(i,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(i,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(h,{children:"File too large"})]})},l={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(S,{children:e.jsx(j,{})})})})},c={render:r=>{const[m,u]=f.useState(null),F=m?.[0];return e.jsxs(d,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:u,children:[e.jsx(i,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),F?.name]})}},p={render:()=>{const r=b(),m=v();return e.jsx(B,{form:r,onSubmit:L,children:e.jsxs(d,{children:[e.jsx(m,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(i,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.watch("file")?.[0]?.name,e.jsx(y,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    const file = files?.[0];
    return <Section>
        <FileField {...props} isInvalid onChange={setFiles}>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
        </FileField>
        {file?.name}
      </Section>;
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <Field name="file" rules={{
          required: "Please choose a file"
        }}>
            <FileField multiple>
              <Label>Certificate</Label>
              <Button variant="outline" color="secondary">
                Select
              </Button>
            </FileField>
          </Field>
          {form.watch("file")?.[0]?.name}
          <ActionGroup>
            <Button type="submit">Upload</Button>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...p.parameters?.docs?.source}}};const He=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{n as Default,l as IconButton,s as WithDescription,a as WithError,c as WithHandler,p as WithReactHookForm,He as __namedExportsOrder,Oe as default};
