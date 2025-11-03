import{r as x,j as e}from"./iframe-C__sNFq5.js";import{w as t,l as u}from"./Modal-CVYufIfq.js";import{S as F}from"./Section-DnBUHG3h.js";import{F as f,b as g}from"./FileCardList-v2rqfv4w.js";import{u as S,F as C,t as D}from"./Form-D-74H8Ei.js";import{B as s}from"./Button-BDJI0X8N.js";import{A as y}from"./ActionGroup-BWUqf9tM.js";import{_ as j,$ as b}from"./IconWarning-BuzGzrbs.js";import{H as h}from"./Heading-Cn6OX0c5.js";import{T as O}from"./Text--GxX46L7.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-Bb5SDKXs.js";import"./flowComponent-0GXkR_Ju.js";import"./index-DiaLXgZW.js";import"./index-BmGDZeJ3.js";import"./Popover-CT_v-Oh-.js";import"./context-BsIjwuj0.js";import"./useStatic-DMsmAY9f.js";import"./OverlayTrigger-AiOoKC_G.js";import"./Dialog-CzLU07Qv.js";import"./Button-B_7NxfoI.js";import"./utils-Dqy6LFYQ.js";import"./ProgressBar-DtGgBXAS.js";import"./Hidden-BiQxXG9U.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CMi9l8Yg.js";import"./useFocusRing-BuunXMoE.js";import"./useFocusable-Dse99QZ8.js";import"./RSPContexts-BMxPkdv6.js";import"./OverlayArrow-DhgMASFr.js";import"./useControlledState-2e7yt8gr.js";import"./Collection-Dh0ESm_f.js";import"./CollectionBuilder-ukVkSTyS.js";import"./SelectionIndicator-Cki_l3jq.js";import"./Separator-D0XClCWV.js";import"./browser-iGgi6T92.js";import"./useLocalizedStringFormatter-BUptx6fZ.js";import"./ControlledNotification-BlGPMSZv.js";import"./ClearPropsContextView-COiHjqok.js";import"./LoadingSpinner-B1HBgs-9.js";import"./LayoutCard-B7t6mB7x.js";import"./Accordion-DR_OJ6pu.js";import"./Action-Df161gDF.js";import"./getActionGroupSlot-BDjKjWbN.js";import"./Alert-CJasCYlq.js";import"./AlertIcon-w10mi-p6.js";import"./AlertBadge-D7vd76yD.js";import"./Align-DvvbrgAg.js";import"./TableFooterRow-Cam8SBFP.js";import"./SkeletonText-1eA6SUsS.js";import"./Avatar-BkbL9sxv.js";import"./AvatarStack-DBHsyjKm.js";import"./Badge-B6qVV2lP.js";import"./BigNumber-BInmMnEz.js";import"./Breadcrumb-BxuxEs4j.js";import"./Link-cdZD4X3X.js";import"./Legend-DMNYYUF7.js";import"./CodeBlock-CbuVyytm.js";import"./CopyButton-w1aIFwyN.js";import"./Tooltip-QyrtVdEX.js";import"./react-children-utilities-k_yO7uGU.js";import"./Color-D1Dr3OHg.js";import"./Content-DpPWD-Cp.js";import"./Label-DR9idq0T.js";import"./ContextualHelpTrigger-vUCASUlH.js";import"./CounterBadge-XDXXDWA7.js";import"./DonutChart-DiBE5F-C.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CZRqwcLx.js";import"./Header-BPnKGcIM.js";import"./Image-DmU9vLsf.js";import"./Initials-BXM7Ff8o.js";import"./InlineCode-lIDroPmY.js";import"./LabeledValue-C0ZDjUhX.js";import"./PopoverTrigger-COcD_xjf.js";import"./Markdown-BbO5I6sS.js";import"./Separator-BbWjorNE.js";import"./Message-DpVEFVCo.js";import"./MessageSeparator-RW6cIBlZ.js";import"./NavigationGroup-yfAk-3tQ.js";import"./Notification-CZmN3Sfg.js";import"./NotificationProvider-DH0treXt.js";import"./ProgressBar-DI6Na1m9.js";import"./Rating-B5RSuqz4.js";import"./Skeleton-UTn3OGNP.js";import"./EmulatedBoldText-Bh8SXQjk.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(f,{children:[...o??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},L=B("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(b,{}),e.jsx(h,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(u,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(f,{children:[...o??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(u,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(f,{children:[...o??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},d={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:L,children:[e.jsxs(F,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(f,{children:[...o.watch("file")??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <Field name="file" rules={{
          required: "Please choose a file"
        }}>
            <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
              <IconUpload />
              <Heading>Drop file</Heading>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </FileDropZone>
          </Field>
          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...d.parameters?.docs?.source}}};const mr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,mr as __namedExportsOrder,ar as default};
