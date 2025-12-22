import{j as r}from"./iframe-CYPvHnuu.js";import{s as d,$ as l,Y as g,J as u,a0 as x}from"./IconWarning-CxTd4Ejc.js";import{L as m}from"./Link-1QrbY5CW.js";import{H as s}from"./HeaderNavigation-hzww1dKw.js";import{B as o}from"./Button-DytH811E.js";import{T as p}from"./Text-B7HPZf5X.js";import{I as h}from"./Image-DDmsToH1.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BJJ4_HRl.js";import{C as M,M as c}from"./MenuItem-B4IrkRej.js";import{C as I}from"./ContextMenuTrigger-PhLXT5tX.js";import"./ContextMenuSection-Cvtue2Xc.js";import{a as T,M as k}from"./Modal-11o7XQs0.js";import{H}from"./Heading-CueoHU19.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BiIhS_GG.js";import"./index-6AOj4Xku.js";import"./index-CuYxJU0p.js";import"./remote-jfB-IGaC.js";import"./useLocalizedStringFormatter-DwFCtkTc.js";import"./context-Dv0AyQUz.js";import"./utils---ZBHqUT.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-BAll9lzw.js";import"./useFocus-Besr2u9O.js";import"./useFocusRing-CwF8Yxqy.js";import"./useFocusable-DNqkvuS2.js";import"./dynamic-CLG3Xjqu.js";import"./LoadingSpinner-If-eK7wE.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BM3lF2Ud.js";import"./ProgressBar-Ds4kKwS2.js";import"./Label-5Y8iG3_m.js";import"./Hidden-C7UX8GNM.js";import"./useLabel-DsmrWctO.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DHkGBw9W.js";import"./EmulatedBoldText-BplpewOf.js";import"./Text-CELcxyth.js";import"./AlertIcon-BGw9V_so.js";import"./Action-Db_hw0Ue.js";import"./context-BIqaEuJx.js";import"./useStatic-Clnm1k9a.js";import"./getActionGroupSlot-D8XZvD04.js";import"./Popover-DqKpgaaL.js";import"./useOverlayController-Dk-2lmPH.js";import"./OverlayContextProvider-B5UEEssH.js";import"./Dialog-DVySTr_M.js";import"./RSPContexts-B-l9PBN7.js";import"./OverlayArrow-c0UAwNBy.js";import"./useControlledState-CzL0wnxp.js";import"./Collection-CC7kOuB5.js";import"./CollectionBuilder-CcAo9kg0.js";import"./SelectionIndicator-CQjOYyqW.js";import"./Separator-B0yS3gpc.js";import"./SelectionManager-D6v8Hpa5.js";import"./useEvent-ZUbDwjtd.js";import"./useCollator-D2xCK0iS.js";import"./FocusScope-CPpTYY10.js";import"./VisuallyHidden-DQ4VZa68.js";import"./Switch-BQ18hHS6.js";import"./useFieldComponent-K4osF3of.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CMepU1Ix.js";import"./useFormReset-DMfMEm_f.js";import"./OverlayTrigger-D4_TWVNj.js";import"./DialogTriggerView-zxEDHmif.js";import"./Overlay-gKWTBbnH.js";import"./ButtonView-BrKu0gZu.js";import"./Flex-DkciXbza.js";import"./Heading-CWDYWjnj.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};
