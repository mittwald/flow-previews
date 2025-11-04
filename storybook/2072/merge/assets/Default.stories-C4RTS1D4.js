import{r as x,j as e}from"./iframe-BGjIo6hw.js";import{w as t,l as u}from"./Modal-BYTJ9Y12.js";import{S as F}from"./Section-TUTyCtZG.js";import{F as f,b as g}from"./FileCardList-C4P00gKp.js";import{u as S,F as C,t as D}from"./Form-GeAuQ6SE.js";import{B as s}from"./Button-72uC3Xxd.js";import{A as y}from"./ActionGroup-hiZS26La.js";import{_ as j,$ as b}from"./IconWarning-OiQYEbgz.js";import{H as h}from"./Heading-QJXZDrut.js";import{T as O}from"./Text-Bc8wJjtt.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-CxgTiQUL.js";import"./flowComponent-CKy74ieT.js";import"./index-RB0ZeMWq.js";import"./index-D8hDUSyP.js";import"./Popover-tW18rmQX.js";import"./context-jnS2Fs_o.js";import"./useStatic-B2rVxKR2.js";import"./OverlayTrigger-CsYA01So.js";import"./Dialog-DZpgyeVc.js";import"./Button-DVeyWZob.js";import"./utils-FWUTa6bA.js";import"./ProgressBar-IcJtTGAe.js";import"./Hidden-YgttGYZu.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DQ8Yy5yO.js";import"./useFocusRing-B268tRT3.js";import"./useFocusable-Cp5mQ5Rc.js";import"./RSPContexts-BLZAUi5X.js";import"./OverlayArrow-D5fKAg8k.js";import"./useControlledState-8IdaO4XH.js";import"./Collection-DBSHt2At.js";import"./CollectionBuilder-CfVVvz4n.js";import"./SelectionIndicator-D0sGU-I3.js";import"./Separator-D2n48QdT.js";import"./browser-i6k0HuHn.js";import"./useLocalizedStringFormatter-DMlB1stV.js";import"./ControlledNotification-Dq6bZvP5.js";import"./ClearPropsContextView-CF-h0ZS8.js";import"./LoadingSpinner-DW7FO3ji.js";import"./LayoutCard-lfPzieL5.js";import"./Accordion-i0q50_hv.js";import"./Action-DQWGsoks.js";import"./getActionGroupSlot-BbMDqkbD.js";import"./Alert-CouJG9of.js";import"./AlertIcon-Dbvw5J6E.js";import"./AlertBadge-CZAc4HrV.js";import"./Align-DZ9lgcQB.js";import"./TableFooterRow-B7GJOO76.js";import"./SkeletonText-BAKl1hQL.js";import"./Avatar-DdlYxgbX.js";import"./AvatarStack-GbEbEW2B.js";import"./Badge-BM2kNOCX.js";import"./BigNumber-D9d1tqLF.js";import"./Breadcrumb-BZd1J0Jr.js";import"./Link-phR0Xn4I.js";import"./Legend-w3nuMcY_.js";import"./CodeBlock-DANnuUSc.js";import"./CopyButton-DCk4o20_.js";import"./Tooltip-CjugpP2q.js";import"./react-children-utilities-CjDAauZg.js";import"./Color-Dq8hW1_T.js";import"./Content-Dsk5yoIX.js";import"./Label-Bfvc2OEj.js";import"./ContextualHelpTrigger-Dxu_RRLr.js";import"./CounterBadge-CkxONrfP.js";import"./DonutChart-CodRmRtb.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BfGqCS7W.js";import"./Header-B7fIZl89.js";import"./Image-DVGepZy_.js";import"./Initials-Drmk3ion.js";import"./InlineCode-D0p9Y-vu.js";import"./LabeledValue-tPVZUd4m.js";import"./PopoverTrigger-QUfyk5z7.js";import"./Markdown-7KDHmlwn.js";import"./Separator-BnpxR7q2.js";import"./Message-DA1fOBGL.js";import"./MessageSeparator-D5qZufnd.js";import"./NavigationGroup-DCtLktTW.js";import"./Notification-B2wiDs3w.js";import"./NotificationProvider-BdKzz8-L.js";import"./ProgressBar-BCWSFDCi.js";import"./Rating-BnGzKbk4.js";import"./Skeleton-D-2WZNfg.js";import"./EmulatedBoldText-DcmHRAc9.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(f,{children:[...o??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},L=B("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(b,{}),e.jsx(h,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(u,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(f,{children:[...o??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(u,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(f,{children:[...o??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},d={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:L,children:[e.jsxs(F,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(f,{children:[...o.watch("file")??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
