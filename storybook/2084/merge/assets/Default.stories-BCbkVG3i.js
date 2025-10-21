import{j as r}from"./iframe-BdeexEb8.js";import{t as d,a0 as l,Z as g,E as u,a1 as x}from"./IconWarning-CtsbdbUA.js";import{L as m}from"./Link-CVxW33L_.js";import{H as s}from"./HeaderNavigation-CcHkcHKH.js";import{B as o}from"./Button-8DtAEqjD.js";import{T as p}from"./Text-G8amV_-h.js";import{I as h}from"./Image-DNNtnp6D.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CJ960qVj.js";import{C as M,M as c}from"./MenuItem-CHhBhqYo.js";import{C as I}from"./ContextMenuTrigger-DLHwKsmz.js";import"./ContextMenuSection-BRjflZKk.js";import{a as T,M as k}from"./Modal-C_ipy9ZO.js";import{H}from"./Heading-CaWv9CDj.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D9dNYku3.js";import"./index-D-gFJj9O.js";import"./index-DrTgVdtP.js";import"./useLocalizedStringFormatter-BAYb9Fap.js";import"./context-D6yVr_mO.js";import"./utils-BE4tcj7E.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-BF3KJpSX.js";import"./useFocus-DOIh0B1Z.js";import"./useFocusRing-rBTaS5qD.js";import"./useFocusable-BJo0-JcZ.js";import"./dynamic-B5dXdtKW.js";import"./LoadingSpinner-f45dISc_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-m7osfjr7.js";import"./ProgressBar-BoDGUte7.js";import"./Label-0GucTR7O.js";import"./Hidden-CQyoiK8N.js";import"./useLabel-_lz56ByA.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CYlNocNO.js";import"./EmulatedBoldText-ZcdE1rVE.js";import"./Text-C7oFtPVp.js";import"./AlertIcon-DxqwozHJ.js";import"./Action-RARPQ8v8.js";import"./context-BWmIRqAJ.js";import"./useStatic-DlCxFiK7.js";import"./getActionGroupSlot-mkbPIyZa.js";import"./Popover-BdPM10kG.js";import"./useOverlayController-CJDaqlYR.js";import"./OverlayContextProvider-DyWsSbcY.js";import"./Dialog-D2DNdmLu.js";import"./RSPContexts-BujZOMoI.js";import"./OverlayArrow-CMWDkVkR.js";import"./useControlledState-lwDPvcY9.js";import"./Collection-7t0tVRTb.js";import"./CollectionBuilder-DzfVoPOa.js";import"./SelectionIndicator-0lfezkYj.js";import"./Separator-DDMmaPKr.js";import"./SelectionManager-Y2mFlrlN.js";import"./useEvent-DWTDuj97.js";import"./useCollator-DH6O6X4x.js";import"./FocusScope-BYBHw4Pm.js";import"./VisuallyHidden-CRJbmMUG.js";import"./ClearPropsContextView-CJZTyvnc.js";import"./ClearPropsContext-C8aFsCZA.js";import"./Switch-DHMwGCdm.js";import"./useFieldComponent-DdJyO0fC.js";import"./react-children-utilities-jctua2LA.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-CQGMBShp.js";import"./useToggleState-BPN6y77U.js";import"./useFormReset-BENrYz2J.js";import"./OverlayTrigger-BSJgZejS.js";import"./ControlledNotification-C6PtDURt.js";import"./DialogTriggerView-BkZj-HyO.js";import"./Overlay-BbShXRym.js";import"./ButtonView-DWNbka-E.js";import"./Heading-CXwQx98o.js";const Fr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const Jr=["Default","WithContextMenu","Dark","Light"];export{e as Dark,t as Default,n as Light,i as WithContextMenu,Jr as __namedExportsOrder,Fr as default};
