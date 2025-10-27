import{j as r}from"./iframe-DoVgBQr5.js";import{t as d,a0 as l,Z as g,E as u,a1 as x}from"./IconWarning-BITNguYJ.js";import{L as m}from"./Link-Bhv3Vxax.js";import{H as s}from"./HeaderNavigation-C2uLDUH3.js";import{B as o}from"./Button-2cUDiMZd.js";import{T as p}from"./Text-DarT3iBq.js";import{I as h}from"./Image-B0KNexqg.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-YZwkbuGj.js";import{C as M,M as c}from"./MenuItem-DFehhigt.js";import{C as I}from"./ContextMenuTrigger-CtTuaCva.js";import"./ContextMenuSection-DNqsPT3L.js";import{a as T,M as k}from"./Modal-CvY9tEtK.js";import{H}from"./Heading-B-ZtrlSM.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-KNPphWYF.js";import"./index-jEdNOdxF.js";import"./index-CnXLT15x.js";import"./useLocalizedStringFormatter-C282_ari.js";import"./context-DKZO50eL.js";import"./utils-BUNxWnYj.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-CMEqlp6n.js";import"./useFocus-DgyX4ANK.js";import"./useFocusRing-C7RfsB5U.js";import"./useFocusable-CYiqpOWe.js";import"./dynamic-DslUBYil.js";import"./LoadingSpinner-BjGFLica.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cf2Tt4tQ.js";import"./ProgressBar-i7FI2__w.js";import"./Label-8ulleTCg.js";import"./Hidden-VhCLrHg5.js";import"./useLabel-Dokwxw5N.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CTr_Jj6j.js";import"./EmulatedBoldText-Ck3zADpv.js";import"./Text-BnwT6LTw.js";import"./AlertIcon-Cn_YkDLf.js";import"./Action-5AgtWQtu.js";import"./context-C0oFmp5D.js";import"./useStatic-DVOn0oZR.js";import"./getActionGroupSlot-Cx2xgGVq.js";import"./Popover-23BYXG6-.js";import"./useOverlayController-CaB8twj3.js";import"./OverlayContextProvider-D10wv2mp.js";import"./Dialog-BOL4Q97z.js";import"./RSPContexts-DwowBXaw.js";import"./OverlayArrow-F14P5UPi.js";import"./useControlledState-JsyFwj7N.js";import"./Collection-BP7ufpBw.js";import"./CollectionBuilder-DJiBT6Uj.js";import"./SelectionIndicator-DHuWhUvH.js";import"./Separator-Ck__hFdD.js";import"./SelectionManager-GAqkDmB6.js";import"./useEvent-CXpyXyC8.js";import"./useCollator-BaFQCUm3.js";import"./FocusScope-DbQQ9osx.js";import"./VisuallyHidden-BzJhkBGh.js";import"./ClearPropsContextView-Ca7YEM0M.js";import"./ClearPropsContext-8Ai0JzP3.js";import"./Switch-CljSqkIH.js";import"./useFieldComponent-Dl5zd8_u.js";import"./react-children-utilities-NLX1q1W1.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-4hJKvVl2.js";import"./useToggleState-nk3Bcv3_.js";import"./useFormReset-DOuAY3sG.js";import"./OverlayTrigger-CMoG14I4.js";import"./ControlledNotification-zc0ciOkv.js";import"./DialogTriggerView-CSun2YfI.js";import"./Overlay-AQnAmuKj.js";import"./ButtonView-DIkPeGfe.js";import"./Heading-BDk_Xo8S.js";const Fr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
