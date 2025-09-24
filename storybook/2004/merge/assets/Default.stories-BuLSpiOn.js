import{j as r}from"./iframe-BN_dfUe_.js";import{y as k,a0 as H,Z as S,E as v,a1 as B}from"./IconWarning-DNOLg4j3.js";import{L as m}from"./Link-kGknJQZR.js";import{H as s}from"./HeaderNavigation-DYdNvIPv.js";import{B as o}from"./Button-D-C47sqm.js";import{T as p}from"./Text-DzaqmzRj.js";import{I as C}from"./Image-CZmvXEiB.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DHdwDP4x.js";import{b as y,C as A,M as c}from"./ContextMenuSection-DopY__n7.js";import{a as D,M as E}from"./Modal-Ba0yUL0_.js";import{H as G}from"./Heading-C3bMpqRe.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BdWjLDJi.js";import"./mergeRefs-upl_BBo9.js";import"./index-C8Ff-wAx.js";import"./useLocalizedStringFormatter-CxEOdw80.js";import"./context-dredv6-K.js";import"./utils-B0sx3Kyr.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-D00Qk3ID.js";import"./useFocus-BPnQl8Vs.js";import"./useFocusRing-BbyZkAky.js";import"./useFocusable-CjxkNo9x.js";import"./dynamic-BgZcYaB5.js";import"./LoadingSpinner-BajA46At.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Df2sUXty.js";import"./ProgressBar-jBCVtiFi.js";import"./Label-DGLQk8oX.js";import"./Hidden-DymlCD5P.js";import"./useLabel-BVHoyGPi.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BV7EqxDV.js";import"./EmulatedBoldText-D3DsYnee.js";import"./Text-Bh7wF6OD.js";import"./AlertIcon-CQa5yTJZ.js";import"./Action-V_TKCgSi.js";import"./context-DRf69qys.js";import"./useStatic-wsYo6cwd.js";import"./getActionGroupSlot-BHB3McHc.js";import"./Popover-DLER5_Cb.js";import"./DialogTriggerView-nA9ebbIS.js";import"./RSPContexts-D2tN5T2G.js";import"./ClearPropsContextView-DP5aaG59.js";import"./useControlledState-B3OMKOuD.js";import"./FocusScope-DSvKVwGk.js";import"./useCollator-D4KmbgCM.js";import"./VisuallyHidden-Cv7STolA.js";import"./Collection-BYc3dnT8.js";import"./CollectionBuilder-Eq-dAbBR.js";import"./Separator-DJTsPnLp.js";import"./Group-BVQ5MOmY.js";import"./SearchField-BBPaTZKc.js";import"./FieldError-CIdDbIOg.js";import"./Form-BI9DTP98.js";import"./useTextField-BYi7xCqf.js";import"./useFormReset-DQe0b_9O.js";import"./TextField-BdrHFS2A.js";import"./useEvent-BzG6iyzN.js";import"./SelectionManager-Bc25mfga.js";import"./Switch-ky0UvS97.js";import"./Label-BSR54Ews.js";import"./useToggleState-CCrodwRf.js";import"./Overlay-CsAHKyS3.js";import"./ButtonView-vqtuDvT5.js";import"./Heading-BXZxzqvc.js";const Ur={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(k,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(k,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,b;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(b=(T=n.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const Vr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Vr as __namedExportsOrder,Ur as default};
